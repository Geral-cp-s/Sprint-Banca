import React, { useState } from "react";
import { Container, Card, DateSection, DetailsSection, FlagSection, ImageSection, Modal, ModalContent, CloseButton,  } from "../components/Pistas/styledPistas";
import ModalInfo from "../components/Pistas/ModalInfo";

import flagRiv from '../../public/img/bandeira/uruguai.png';
import pistaRiv from '../../public/img/pistas/rivera.jpg';
import circuitoRiv from '../../public/img/circuito/rivera.jpg';

import flagGua from '../../public/img/bandeira/brasil.png';
import pistaGua from '../../public/img/pistas/guapore.jpg';
import circuitoGua from '../../public/img/circuito/guarapore.jpg';

import flagCas from '../../public/img/bandeira/brasil.png';
import pistaCas from '../../public/img/pistas/cascavel.jpg';
import circuitoCas from '../../public/img/circuito/cascavel.png';

import flagCG from '../../public/img/bandeira/brasil.png';
import pistaCG from '../../public/img/pistas/cg.webp';
import circuitoCG from '../../public/img/circuito/cg.png';

import flagLon from '../../public/img/bandeira/brasil.png';
import pistaLon from '../../public/img/pistas/londrina.webp';
import circuitoLon from '../../public/img/circuito/londrina.png';

import flagVia from '../../public/img/bandeira/brasil.png';
import pistaVia from '../../public/img/pistas/viamao.jpg';
import circuitoVia from '../../public/img/circuito/viamao.svg';


const PistasTruck = () => {
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
            day: "24",
            month: "MAR",
            city: "RIVERA",
            flag: flagRiv,  // Import direto
            image: pistaRiv, // Import direto
            modalInfo: {
                img: circuitoRiv,
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
            day: "21",
            month: "ABR",
            city: "GUAPORÉ",
            flag: flagGua,  // Import direto
            image: pistaGua, // Import direto
            modalInfo: {
                img: circuitoGua,
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
            day: "2",
            month: "JUN",
            city: "CASCAVEL",
            flag: flagCas,  // Import direto
            image: pistaCas, // Import direto
            modalInfo: {
                img: circuitoCas,
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
            day: "30",
            month: "JUN",
            city: "CAMPO GRANDE",
            flag: flagCG,  // Import direto
            image: pistaCG, // Import direto
            modalInfo: {
                img: circuitoCG,
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
            day: "04",
            month: "AGO",
            city: "LONDRINA",
            flag: flagLon,  // Import direto
            image: pistaLon, // Import direto
            modalInfo: {
                img: circuitoLon,
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
            day: "08",
            month: "SET",
            city: "GUAPORÉ",
            flag: flagGua,  // Import direto
            image: pistaGua, // Import direto
            modalInfo: {
                img: circuitoGua,
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
            day: "13",
            month: "OUT",
            city: "RIVERA",
            flag: flagRiv,  // Import direto
            image: pistaRiv, // Import direto
            modalInfo: {
                img: circuitoRiv,
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
            day: "10",
            month: "NOV",
            city: "VIAMÃO",
            flag: flagVia,  // Import direto
            image: pistaVia, // Import direto
            modalInfo: {
                img: circuitoVia,
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
            day: "1",
            month: "DEZ",
            city: "CASCAVEL",
            flag: flagCas,  // Import direto
            image: pistaCas, // Import direto
            modalInfo: {
                img: circuitoCas,
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

export default PistasTruck;
