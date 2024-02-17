import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { ButtonText } from "../../components/ButtonText";

import { Container, Form } from "./styles";

export function New() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const [links, setLinks] = useState([]);
    const [newLink, setNewLink] = useState("");

    const [tags, setTags] = useState([]);
    const [newTag, setNewTag] = useState("");

    function handleBack() {
        navigate(-1);
    };

    async function handleNewNote() {
        if (!title) {
            return alert("O campo Título não pode fica vazio!");
        };

        if (newTag || newLink) {
            return alert("Você digitou em alguns campos e não confirmou. Para continuar, confirme o link e/ou tag ou deixe os campos vazios.");
        };

        await api.post("/notes", {
            title,
            description,
            tags,
            links
        });

        alert("Nota criada com sucesso!");
        navigate(-1);
    };

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink]);
        setNewLink("");
    };

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted));
    };

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag]);
        setNewTag("");
    };

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted));
    };

    return (
        <Container>
            <Header />
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <ButtonText title="Voltar" onClick={handleBack} />
                    </header>
                    <Input
                        placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />
                    <Section title="Links úteis">
                        {
                            links.map((link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={link}
                                    onClick={() => { handleRemoveLink(link) }}
                                />
                            ))
                        }
                        <NoteItem
                            isNew={true}
                            placeholder="Novo link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => { handleRemoveTag(tag) }}
                                    />
                                ))
                            }
                            <NoteItem
                                isNew={true}
                                value={newTag}
                                placeholder="Nova Tag"
                                onChange={e => setNewTag(e.target.value)}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>
                    <Button
                        title="Salvar"
                        onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    );
};
