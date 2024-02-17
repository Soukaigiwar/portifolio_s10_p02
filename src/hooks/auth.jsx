import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", token);

            api.defaults.headers.common['authorization'] = `Bearer ${token}`;
            setData({ user, token });
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Erro ao receber dados.");
            };
        };
    };

    function signOut() {
        localStorage.removeItem("@rocketnotes:user");
        localStorage.removeItem("@rocketnotes:token");

        setData({});
    };

    async function updateProfile({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);
                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            };

            const { status } = await api.put("/users", user);

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            setData({ user, token: data.token });
            alert("Perfil atualizado.");

            return status;
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Erro ao atualizar perfil.");
            };
        };
    };

    useEffect(() => {
        const user = localStorage.getItem("@rocketnotes:user");
        const token = localStorage.getItem("@rocketnotes:token");

        if (user && token) {
            api.defaults.headers.common['authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            });
        };
    }, []);

    return (
        <AuthContext.Provider value={{ signIn, signOut, user: data.user, updateProfile }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    return context;
};

export { AuthProvider, useAuth };
