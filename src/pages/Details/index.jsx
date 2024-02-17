import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Tag } from "../../components/Tag";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

import { Container, Links, Content } from "./styles";

export function Details() {
    const params = useParams();
    const [data, setData] = useState(null);
    const [links, setLinks] = useState(null);
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    };

    async function handleRemoveNote() {
        const confirm = window.confirm("Deseja excluir essa nota?");

        if (confirm) {
            await api.delete(`/notes/${data.id}`);
            handleBack();
        };
    };

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            const shortUrl = response.data.links.map(link => {
                return {
                    ...link,
                    shortUrl: link.url.replace(/^https?:\/\//, "")
                };
            });

            setLinks(shortUrl);
            setData(response.data);
        };

        fetchNote();
    }, []);

    return (
        <Container>
            <Header />
            {
                data &&
                <main>
                    <Content>
                        <ButtonText
                            title="Excluir nota"
                            isActive={true}
                            onClick={handleRemoveNote}
                        />
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        {
                            links &&
                            <Section title="Links Úteis">
                                <Links>
                                    {
                                        links.map(link => (
                                            <li key={String(link.id)}>
                                                <a
                                                    href={link.url}
                                                    target="_blank"
                                                >
                                                    {link.shortUrl}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </Links>
                            </Section>
                        }

                        {
                            data.tags &&
                            <Section title="Marcadores">
                                {
                                    data.tags.map(tag => (
                                        <Tag key={tag.id} title={tag.name} />
                                    ))
                                }
                            </Section>
                        }
                        <Button title="Voltar" onClick={handleBack} />
                    </Content>
                </main>
            }
        </Container>
    );
};
