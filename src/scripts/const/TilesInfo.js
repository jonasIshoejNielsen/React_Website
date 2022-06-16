import React from 'react';
import Logo from '../pages/Logo';
import AboutIcon from '@fortawesome/fontawesome-free-solid/faUser';
import MoneyIcon from '@fortawesome/fontawesome-free-solid/faMoneyBillAlt'
import FoodIcon from '@fortawesome/fontawesome-free-solid/faUtensils'
import ArtistIcon from '@fortawesome/fontawesome-free-solid/faMusic'

const tiles = [];

//Intro
const intro = {
    title: 'Marktramp er Danmarks nye fede musik-festival for alle jer musikelskere fra 15 til 70+ år.',
    body: ' Da vi som arrangørerne af en ny musikfestival (Marktramp) har et ønske om, at skabe den fedeste og bedste festival i Danmark. Vi har derfor brug for din hjælp og mening! Så hjælp os ved at deltage i undersøgelsen, så vi kan komme i gang med at skabe en fed musikfestival, som passer til lige netop jer.',
    validatedTitle: 'Godkend at dette er dine korrekte svar!',
    className: "introTile"
};
tiles['intro'] = intro;

//Artists
const artist = {
    title: 'Vælg 3 Kunstnere du gerne vil høre',
    validatedTitle: 'Du har valgt disse 3 kunstnere',
    className: "artistTile",
    icon: ArtistIcon,
    label: 'Kunstnere',
};
tiles['artist'] = artist;

//Rating
const rating = {
    title: 'Hvor vigtig er følgende forhold: (hvor 5 er vigtigst)',
    validatedTitle: 'Du har rangeret vigtigheden af følgende forhold',
    className: "ratingTile",
};
tiles['rating'] = rating;

//Money
const money = {
    title: 'Hvor mange penge bruger du normalt på en festival?',
    validatedTitle: 'Du forventer at bruge',
    className: "moneyTile",
    icon: MoneyIcon,
    label: 'Penge',
};
tiles['money'] = money;

//Food
const food = {
    title: 'Hvad for noget mad kunne du godt tænke dig, og hvorfor?',
    validatedTitle: 'Dine mad preferencer er',
    className: "foodTile",
    icon: FoodIcon,
    label: 'Mad',
};
tiles['food'] = food;

//About
const about = {
    title: 'Oplysninger om dig',
    validatedTitle: 'Du har indtastet følgende oplysninger om dig selv',
    className: "aboutTile",
    icon: AboutIcon,
    label: 'Om dig',
};
tiles['about'] = about;

//Bottom
const bottom = {
    className: "bootomTile",
    body: <button className="btn btn-blue">Videre</button>
};
tiles['bottom'] = bottom;

export default tiles;