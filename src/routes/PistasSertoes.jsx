import React, { useState } from "react";
import { Container, Card, DateSection, DetailsSection, FlagSection, ImageSection, Modal, ModalContent, CloseButton,  } from "../components/Pistas/styledPistas";
import ModalInfo from "../components/Pistas/ModalInfo";

import flagBra from '../../public/img/bandeira/brasil.png';
import pistaBra from '../../public/img/rally/pistas/brasilia.jpg';
import circuitoBra from '../../public/img/circuito/rivera.jpg';

import flagFor from '../../public/img/bandeira/brasil.png';
import pistaFor from '../../public/img/rally/pistas/formosa.jpg';
import circuitoFor from '../../public/img/circuito/guarapore.jpg';

import flagSan from '../../public/img/bandeira/brasil.png';
import pistaSan from '../../public/img/rally/pistas/santa.jpg';
import circuitoSan from '../../public/img/circuito/cascavel.png';

import flagLui from '../../public/img/bandeira/brasil.png';
import pistaLui from '../../public/img/rally/pistas/luis.jpg';
import circuitoLui from '../../public/img/circuito/cg.png';

import flagPos from '../../public/img/bandeira/brasil.png';
import pistaPos from '../../public/img/rally/pistas/posse.jpg';
import circuitoPos from '../../public/img/circuito/londrina.png';


// https://visitebrasilia.com.br/noticias/o-caminho-que-inspira-sertoes-brb-2024-se-aventura-pelas-veredas-do-coracao-do-brasil
// Gabriel vai utilizar depois

const PistasSertoes = () => {
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setModalData(data);
    };

    const closeModal = () => {
        setModalData(null);
    };

    const pistasData = [
        // RIVERA
        {
            id: 1,
            day: "23",
            month: "AGO",
            city: " Prólogo: Brasília-DF",
            flag: flagBra,  // Import direto
            image: pistaBra, // Import direto
            modalInfo: {
                img: circuitoBra,
                circuit: "---",
                round: "1",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Guaraporé
        {
            id: 1,
            day: "24",
            month: "AGO",
            city: "1ª etapa: Brasília-DF / Formosa-GO",
            flag: flagFor,  // Import direto
            image: pistaFor, // Import direto
            modalInfo: {
                img: circuitoFor,
                circuit: "---",
                round: "2",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Cascavel
        {
            id: 1,
            day: "25",
            month: "AGO",
            city: "2ª etapa: Formosa-GO / Santa Maria da Vitória-BA",
            flag: flagSan,  // Import direto
            image: pistaSan, // Import direto
            modalInfo: {
                img: circuitoSan,
                circuit: "---",
                round: "3",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Campo Grande
        {
            id: 1,
            day: "26",
            month: "AGO",
            city: "3ª etapa: Santa Maria da Vitória / Luís Eduardo Magalhães-BA",
            flag: flagLui,  // Import direto
            image: pistaLui, // Import direto
            modalInfo: {
                img: circuitoLui,
                circuit: "---",
                round: "4",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Londrina
        {
            id: 1,
            day: "27",
            month: "AGO",
            city: "4ª etapa: Luís Eduardo Magalhães",
            flag: flagLui,  // Import direto
            image: pistaLui, // Import direto
            modalInfo: {
                img: circuitoLui,
                circuit: "---",
                round: "5",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Guarapore 2
        {
            id: 1,
            day: "28",
            month: "AGO",
            city: "5ª etapa: Luís Eduardo Magalhães",
            flag: flagLui,  // Import direto
            image: pistaLui, // Import direto
            modalInfo: {
                img: circuitoLui,
                circuit: "---",
                round: "2",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Rivera 2
        {
            id: 1,
            day: "29",
            month: "AGO",
            city: "6ª etapa: Luís Eduardo Magalhães / Posse-GO",
            flag: flagPos,  // Import direto
            image: pistaPos, // Import direto
            modalInfo: {
                img: circuitoPos,
                circuit: "---",
                round: "7",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Viamão
        {
            id: 1,
            day: "30",
            month: "AGO",
            city: "7ª etapa: Posse / Formosa",
            flag: flagFor,  // Import direto
            image: pistaFor, // Import direto
            modalInfo: {
                img: circuitoFor,
                circuit: "---",
                round: "8",
                description: "---",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // Cascavel 2
        {
            id: 1,
            day: "31",
            month: "AGO",
            city: "8 ª etapa: Formosa / Brasília",
            flag: flagBra,  // Import direto
            image: pistaBra, // Import direto
            modalInfo: {
                img: circuitoBra,
                circuit: "---",
                round: "9",
                extension: "---",
                attackMode: "---.",
                winner: "---",
            },
        }
    ];

    return (
        <Container>
            {pistasData.map((pista) => (
                <Card key={pista.id} onClick={() => openModal(pista.modalInfo)}>
                    <DateSection>
                        <span>{pista.day}</span>
                        <span>{pista.month}</span>
                    </DateSection>
                    <DetailsSection>
                        <FlagSection>
                            <img src={pista.flag} alt={`${pista.city} Flag`} />
                            <span>{pista.city}</span>
                        </FlagSection>
                    </DetailsSection>
                    <ImageSection>
                        <img src={pista.image} alt={`${pista.city} Event`} />
                    </ImageSection>
                </Card>
            ))}
            {modalData && (
                <Modal>
                    <ModalContent>
                        <CloseButton onClick={closeModal}>&times;</CloseButton>
                        <ModalInfo data={modalData} />
                    </ModalContent>
                </Modal>
            )}
        </Container>
    );
};

export default PistasSertoes;
