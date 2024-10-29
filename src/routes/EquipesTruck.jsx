import React from 'react';
import { DriverCard, CardsRow } from '../components/Equipes-Truck/Cards'; // Import both components

const pilots = [
  { number: 1, name: "Rodrigo Gomes", category: "ELETRÔNICO", brand: "VOLVO", city: "CENTRALINA-MG", image: "/path/to/image1.jpg" },

  { number: "03", name: "Álvaro Bendo", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "ERMO-SC", image: "/path/to/image2.jpg" },

  { number: "04", name: "Ramiris Fontanella", category: "ELETRÔNICO", brand: "SCANIA", city: "LAURO MULLER-SC", image: "/path/to/image3.jpg" },
  
  { number: "06", name: "Túlio Bendo", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "ERMO-SC", image: "/path/to/image3.jpg" },
  
  { number: "08", name: "Léo Barramacher", category: "ELETRÔNICO", brand: "VOLVO", city: "ITAPEMA-SC", image: "/path/to/image3.jpg" },
  
  { number: "13", name: "Alex Peixeiro", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "SANTOS-SP", image: "/path/to/image3.jpg" },
  
  { number: "14", name: "Marcio Limestone", category: "ELETRÔNICO", brand: "SCANIA", city: "CURITIBA-PR", image: "/path/to/image3.jpg" },
  
  { number: "17", name: "Adriano Zoinho", category: "ELETRÔNICO", brand: "SCANIA", city: "ARAUCÁRIA-PR", image: "/path/to/image3.jpg" },
  
  { number: "20", name: "Pedrp Muffato", category: "ELETRÔNICO", brand: "SCANIA", city: "CASCAVEL-PR", image: "/path/to/image3.jpg" },
  
  { number: "21", name: "Paulo Rampon", category: "ELETRÔNICO", brand: "SCANIA", city: "CURITIBA-PR", image: "/path/to/image3.jpg" },
  
  { number: "23", name: "Jorginho Feio", category: "ELETRÔNICO", brand: "SCANIA", city: "PELOTAS-RS", image: "/path/to/image3.jpg" },
  
  { number: "25", name: "Daril Amaral", category: "ELETRÔNICO", brand: "SCANIA", city: "PINDAMONHANGABA", image: "/path/to/image3.jpg" },
  
  { number: "33", name: "Joãozinho S. Helena", category: "ELETRÔNICO", brand: "DAF", city: "COLOMBO-PR", image: "/path/to/image3.jpg" },
  
  { number: "40", name: "Everton Fontanella", category: "ELETRÔNICO", brand: "SCANIA", city: "CRICIÚMA-SC", image: "/path/to/image3.jpg" },
  
  { number: "41", name: "João Lemos", category: "ELETRÔNICO", brand: "FORD", city: "GUARUJÁ-SP", image: "/path/to/image3.jpg" },
  
  { number: "42", name: "Robson Trevizol", category: "ELETRÔNICO", brand: "VOLKSWAGEN", city: "XANXERÊ-SC", image: "/path/to/image3.jpg" },
  
  { number: "44", name: "Baté", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "CASCAVEL-PR", image: "/path/to/image3.jpg" },
  
  { number: "46", name: "Robson Portaluppi", category: "ELETRÔNICO", brand: "FORD", city: "BENTO GONÇALVES-RS", image: "/path/to/image3.jpg" },
  
  { number: "50", name: "Fabricio Berton", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "CAMPO GRANDE-MS", image: "/path/to/image3.jpg" },
  
  { number: "51", name: "Sandro Piheiro", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "ITAPEMA-SC", image: "/path/to/image3.jpg" },
  
  { number: "64", name: "João Helder", category: "ELETRÔNICO", brand: "VOLVO", city: "CURITIBA-PR", image: "/path/to/image3.jpg" },
  
  { number: "67", name: "Zetti", category: "ELETRÔNICO", brand: "VOLKSWAGEN", city: "SÃO J. BOA VISTA-SP", image: "/path/to/image3.jpg" },
  
  { number: "69", name: "Alisson Nunberg", category: "BOMBA INJETORA", brand: "SCANIA", city: "FOZ DO IGUAÇU-PR", image: "/path/to/image3.jpg" },
  
  { number: "76", name: "Rafael Fleck", category: "ELETRÔNICO", brand: "SCANIA", city: "PORTO ALEGRA-RS", image: "/path/to/image3.jpg" },
  
  { number: "94", name: "Brayan Ruan", category: "ELETRÔNICO", brand: "SCANIA", city: "CURITIBA-PR", image: "/path/to/image3.jpg" },
  
  { number: "97", name: "Taio Agostini", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "SÃO MIGUEL DO OESTE", image: "/path/to/image3.jpg" },
  
  { number: "100", name: "Lisarb", category: "ELETRÔNICO", brand: "VOLVO", city: "CANOAS-RS", image: "/path/to/image3.jpg" },
  
  { number: "121", name: "Geraldinho", category: "BOMBA INJETORA", brand: "VOLKSWAGEN", city: "SÃO PAULO-SP", image: "/path/to/image3.jpg" },
  
  { number: "444", name: "Marcelo Bonato", category: "ELETRÔNICO", brand: "SCANIA", city: "COLOMBO-PR", image: "/path/to/image3.jpg" },
  
  { number: "503", name: "Nilton Jacobsen", category: "ELETRÔNICO", brand: "SCANIA", city: "KATUETÉ-PY", image: "/path/to/image3.jpg" },
  
  { number: "600", name: "Ricardo Ançay", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "ARAUCÁRIA-PR", image: "/path/to/image3.jpg" },
  
  { number: "970", name: "Edivan Monteiro", category: "ELETRÔNICO", brand: "MERCEDES-BENZ", city: "CASCAVEL-PR", image: "/path/to/image3.jpg" },
  

  // Add more pilot data as needed
];

function EquipesTruck() {
  return (
    <div className="App">
      <CardsRow>
        {pilots.map((driver, index) => (
          <DriverCard key={index} driver={driver} />
        ))}
      </CardsRow>
    </div>
  );
}

export default EquipesTruck;
