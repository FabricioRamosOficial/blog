import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }
  foodDetails=[
    {
      id:1,
      foodName:"Tambaqui assado com recheio",
      foodDetails:"Tambaqui assado com recheio",
      foodPrice:"115",
      foodImg:"https://escolaeducacao.com.br/wp-content/uploads/2019/03/tambaqui-300x225.jpg"
    },
    {
      id:2,
      foodName:"Moqueca de peixe",
      foodDetails:"Moqueca de peixe",
      foodPrice:"90",
      foodImg:"https://escolaeducacao.com.br/wp-content/uploads/2019/03/moqueca-de-peixe-300x200.jpg"
    },
    {
      id:3,
      foodName:"Pato no Tucupi",
      foodDetails:"Pato no Tucupi",
      foodPrice:"85",
      foodImg:"https://escolaeducacao.com.br/wp-content/uploads/2019/03/pato-no-tucupi-300x200.jpg"
    },
    {
      id:4,
      foodName:"Galinhada com pequi",
      foodDetails:"Galinhada com pequi",
      foodPrice:"50",
      foodImg:"https://escolaeducacao.com.br/wp-content/uploads/2019/03/comidas-tipicas-de-goias--300x145.jpg"
    },
    {
      id:5,
      foodName:"Frango ao molho com pequi",
      foodDetails:"Frango ao molho com pequi",
      foodPrice:"65",
      foodImg:"https://escolaeducacao.com.br/wp-content/uploads/2019/03/Frango-com-pequi-300x200.jpg"
    },
    {
      id:6,
      foodName:"Feijoada",
      foodDetails:"Feijoada",
      foodPrice:"130",
      foodImg:"https://escolaeducacao.com.br/wp-content/uploads/2019/03/feijoada-300x207.jpg"
    },
  ]
}
