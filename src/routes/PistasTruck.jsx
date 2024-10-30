import React, { useState } from "react";
import { Container, Card, DateSection, DetailsSection, FlagSection, ImageSection, Modal, ModalContent, CloseButton,  } from "../components/Pistas/styledPistas";
import ModalInfo from "../components/Pistas/ModalInfo";

import flagBra from '../../public/img/bandeira/uruguai.png';
import pistaBra from '../../public/img/pistas/rivera.jpg';
import circuitoBra from '../../public/img/circuito/sp.png';

import flagMex from '../../public/img/bandeira/mex.png';
import pistaMex from '../../public/img/pistas/mexico.jpg';
import circuitoMex from '../../public/img/circuito/mex.png';

import flagJed from '../../public/img/bandeira/arabia.png';
import pistaJed from '../../public/img/pistas/jeddah.jpg';
import circuitoJed from '../../public/img/circuito/jeddah.jpg';

//import flagMex from '../../public/img/bandeira/mex.png';
import pistaTbc from '../../public/img/atention.png';
//import circuitoMex from '../../public/img/circuito/mex.png';

import flagMia from '../../public/img/bandeira/eua.png';
import pistaMia from '../../public/img/pistas/miami.jpg';
import circuitoMia from '../../public/img/circuito/miami.webp';

import flagMon from '../../public/img/bandeira/monaco.png';
import pistaMon from '../../public/img/pistas/monaco.jpeg';
import circuitoMon from '../../public/img/circuito/monaco.png';

import flagTok from '../../public/img/bandeira/japao.png';
import pistaTok from '../../public/img/pistas/japao.jpg';
import circuitoTok from '../../public/img/circuito/jap.png';


const PistasTruck = () => {
    const [modalData, setModalData] = useState(null);

    const openModal = (data) => {
        setModalData(data);
    };

    const closeModal = () => {
        setModalData(null);
    };

    const pistasData = [
        // SÃO PAULO
        {
            id: 1,
            day: "24",
            month: "MAR",
            city: "RIVERA",
            flag: flagBra,  // Import direto
            image: pistaBra, // Import direto
            modalInfo: {
                img: circuitoBra,
                circuit: "CIRCUITO RUA DE SÃO PAULO",
                round: "1",
                description: "- Com três longas retas conectadas por chicanes complicadas, curvas fechadas e curvas fechadas, o circuito de São Paulo é uma volta desafiadora para o pelotão.",
                extension: "- 2.933 km de extensão e 11 curvas.",
                attackMode: "Modo ataque se localiza entre as curvas 11 e 12.",
                winner: "---",
            },
        },
        // MEXICO
        {
            id: 1,
            day: "11",
            month: "JAN",
            city: "CIDADE DO MÉXICO",
            flag: flagMex,  // Import direto
            image: pistaMex, // Import direto
            modalInfo: {
                img: circuitoMex,
                circuit: "AUTÓDROMO HERMANOS RODRÍGUEZ",
                round: "2",
                description: "- O traçado da pista apresenta uma mistura de retas longas e rápidas e uma seção técnica interna através do lendário estádio Foro Sol.",
                extension: "2606 metros de extensão e 19 curvas.",
                attackMode: "Modo ataque se localiza entre as curvas 11 e 12.",
                winner: "---",
            },
        },
        // JEDDAH 1
        {
            id: 1,
            day: "14",
            month: "FEV",
            city: "JEDDAH",
            flag: flagJed,  // Import direto
            image: pistaJed, // Import direto
            modalInfo: {
                img: circuitoJed,
                circuit: "---",
                round: "3",
                description: "SEM INFORMAÇÕES SOBRE O CIRCUITO",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // JEDDAH 2
        {
            id: 1,
            day: "15",
            month: "FEV",
            city: "JEDDAH",
            flag: flagJed,  // Import direto
            image: pistaJed, // Import direto
            modalInfo: {
                img: circuitoJed,
                circuit: "---",
                round: "4",
                description: "SEM INFORMAÇÕES SOBRE O CIRCUITO",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // TBC
        {
            id: 1,
            day: "08",
            month: "MAR",
            city: "TBC",
            // flag: flagJed,  // Import direto
            image: pistaTbc, // Import direto
            // modalInfo: {
            //     // img: circuitoJed,
            //     circuit: "---",
            //     round: "5",
            //     description: "SEM INFORMAÇÕES SOBRE O CIRCUITO",
            //     extension: "---",
            //     attackMode: "---",
            //     winner: "---",
            // },
        },
        // MIAMI
        {
            id: 1,
            day: "12",
            month: "ABR",
            city: "MIAMI",
            flag: flagMia,  // Import direto
            image: pistaMia, // Import direto
            modalInfo: {
                img: circuitoMia,
                circuit: "---",
                round: "6",
                description: "--SEM INFORMAÇÕES SOBRE O CIRCUITO--",
                extension: "---",
                attackMode: "---",
                winner: "---",
            },
        },
        // MONACO 1
        {
            id: 1,
            day: "3",
            month: "MAI",
            city: "MONACO",
            flag: flagMon,  // Import direto
            image: pistaMon, // Import direto
            modalInfo: {
                img: circuitoMon,
                circuit: "CIRCUITO DE MÔNACO",
                round: "7",
                description: "- O traçado da pista apresenta uma mistura de retas longas e rápidas e uma seção técnica interna através do lendário estádio Foro Sol.",
                extension: "2606 metros de extensão e 19 curvas.",
                attackMode: "Modo ataque se localiza entre as curvas 11 e 12.",
                winner: "---",
            },
        },
        // MONACO 2
        {
            id: 1,
            day: "4",
            month: "MAI",
            city: "MONACO",
            flag: flagMon,  // Import direto
            image: pistaMon, // Import direto
            modalInfo: {
                img: circuitoMon,
                circuit: "CIRCUITO DE MÔNACO",
                round: "8",
                description: "- La Rascasse, Casino Square e Grand Hotel Hairpin - há poucas esquinas que evocam a lenda do automobilismo do que as ruas sinuosas que margeiam o circuito de Mônaco.",
                extension: "2606 metros de extensão e 19 curvas.",
                attackMode: "Modo ataque se localiza entre as curvas 11 e 12.",
                winner: "---",
            },
        },
        // TOKYO 1
        {
            id: 1,
            day: "17",
            month: "MAI",
            city: "TOKYO",
            flag: flagTok,  // Import direto
            image: pistaTok, // Import direto
            modalInfo: {
                img: circuitoTok,
                circuit: "CIRCUITO DE RUA DE TÓQUIO",
                round: "9",
                extension: "- 2,585 km de extensão e 20 curvas.",
                attackMode: "- Modo Ataque ficará na parte externa da curva 4.",
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