import type Piece from "@/types/Piece";

import cliffside from "@/assets/images/art/cliffside.webp";
import untitled from "@/assets/images/art/untitled.webp";
import dandelions from "@/assets/images/art/dandelions.webp";
import itreallywas from "@/assets/images/art/itreallywas.webp";
import paris from "@/assets/images/art/paris.webp";
import wolf from "@/assets/images/art/wolf.webp";
import girlhood from "@/assets/images/art/girlhood.webp";
import petitcove from "@/assets/images/art/petitcove.webp";
import settled from "@/assets/images/art/settled.webp";
import weller from "@/assets/images/art/weller.webp";
import sanjuan from "@/assets/images/art/sanjuan.webp";
import forget from "@/assets/images/art/forget.webp";
import home from "@/assets/images/art/home.webp";
import blair from "@/assets/images/art/blair.webp";
import boxer from "@/assets/images/art/theboxer.webp";
import cosmo from "@/assets/images/art/cosmo.webp";
import dexter from "@/assets/images/art/dexter.webp";
import yoshimi from "@/assets/images/art/yoshimi.webp";
import secretgarden from "@/assets/images/art/secretgarden.webp";
import waterlilies from "@/assets/images/art/waterlilies.webp";
import mandy from "@/assets/images/art/mandy.webp";
import pinkCat from "@/assets/images/art/pink-cat.jpg";
import windfishEgg from "@/assets/images/art/windfish-egg.jpg";
import teapot from "@/assets/images/art/teapot.jpg";
import rabbit from "@/assets/images/art/rabbit.jpg";

// Thumbnail imports
import cliffsideThumb from "@/assets/images/art/cliffsidet.jpg";
import untitledThumb from "@/assets/images/art/untitledt.webp";
import dandelionsThumb from "@/assets/images/art/dandelionst.jpg";
import itreallyThumb from "@/assets/images/art/itreallywast.jpg";
import parisThumb from "@/assets/images/art/parist.jpg";
import wolfThumb from "@/assets/images/art/wolft.jpg";
import girlhoodThumb from "@/assets/images/art/girlhoodt.jpg";
import petitcoveThumb from "@/assets/images/art/petitcovet.jpg";
import settledThumb from "@/assets/images/art/settledt.jpg";
import wellerThumb from "@/assets/images/art/wellert.jpg";
import sanjuanThumb from "@/assets/images/art/sanjuant.jpg";
import forgetThumb from "@/assets/images/art/forgett.jpg";
import homeThumb from "@/assets/images/art/homet.jpg";
import blairThumb from "@/assets/images/art/blairt.jpg";
import boxerThumb from "@/assets/images/art/theboxert.jpg";
import secretgardenThumb from "@/assets/images/art/secretgardent.jpg";
import waterliliesThumb from "@/assets/images/art/waterliliest.jpg";
import cosmoThumb from "@/assets/images/art/cosmot.jpg";
import dexterThumb from "@/assets/images/art/dextert.jpg";
import yoshiThumb from "@/assets/images/art/yoshi.jpg";
import mandyThumb from "@/assets/images/art/mandyt.jpg";
import pinkCatThumb from "@/assets/images/art/pink-catt.webp";
import windfishEggThumb from "@/assets/images/art/windfish-eggt.webp";
import teapotThumb from "@/assets/images/art/teapott.webp";
import rabbitThumb from "@/assets/images/art/rabbitt.webp";

const art: Array<Piece> = [
  {
    slug: "cat-4",
    thumb: pinkCatThumb,
    frameColor: "bg-green",
    mainImage: pinkCat,
    title: "CAT 4",
    alt: "A ceramic cat lying on its back.",
    description: `A ceramic cat lying on its back.`,
    type: "sculpture",
  },
  {
    slug: "windfishs-egg",
    thumb: windfishEggThumb,
    frameColor: "bg-pink",
    mainImage: windfishEgg,
    title: "Windfish's Egg",
    alt: "A ceramic egg on top of a mountain with a windfish inside it",
    description: `A ceramic egg on top of a mountain with a windfish inside it.`,
    type: "sculpture",
  },
  {
    slug: "teapot",
    thumb: teapotThumb,
    frameColor: "bg-yellow",
    mainImage: teapot,
    title: "Teapot",
    alt: "A ceramic teapot with a textured floral design",
    description: `A ceramic teapot with a textured floral design.`,
    type: "sculpture",
  },
  {
    slug: "rabbit",
    thumb: rabbitThumb,
    frameColor: "bg-red",
    mainImage: rabbit,
    title: "Rabbit",
    alt: "A ceramic rabbit bust",
    description: `A ceramic rabbit bust.`,
    type: "sculpture",
  },
  {
    slug: "cliffside-seaside",
    thumb: cliffsideThumb,
    frameColor: "bg-ice",
    mainImage: cliffside,
    title: "Cliffside, Seaside",
    alt: "A painting of the Amalfi Coast",
    description: ``,
    type: "painting",
  },
  {
    slug: "untitled",
    thumb: untitledThumb,
    frameColor: "bg-pink",
    mainImage: untitled,
    title: "(Untitled)",
    alt: "A mixed media painting of Breakfast at Tiffany's, featuring Barbie",
    description: `A mixed media painting of Breakfast at Tiffany's, featuring Barbie.`,
    type: "painting",
  },
  {
    slug: "dandelions",
    thumb: dandelionsThumb,
    frameColor: "bg-cerulean",
    mainImage: dandelions,
    title: "Dandelions",
    alt: "A painting of a cave surrounded by greenery and dandelions",
    description: `A painting of a cave surrounded by greenery and dandelions.`,
    type: "painting",
  },
  {
    slug: "it-really-was-wasnt-it",
    thumb: itreallyThumb,
    frameColor: "bg-green",
    mainImage: itreallywas,
    title: "It Really Was, Wasn't it?",
    alt: "A painting of the bank of Jenny Lake at the Grand Tetons",
    description: `A painting of the bank of Jenny Lake at the Grand Tetons.`,
    type: "painting",
  },
  {
    slug: "4-nights-in-paris",
    thumb: parisThumb,
    frameColor: "bg-yellow",
    mainImage: paris,
    title: "4 Nights in Paris",
    alt: "A painting of a bridge over the Seine in Paris at night.",
    description: `A painting of a bridge over the Seine in Paris at night.`,
    type: "painting",
  },
  {
    slug: "wolf-country",
    thumb: wolfThumb,
    frameColor: "bg-red",
    mainImage: wolf,
    title: "Wolf Country",
    alt: "A painting of the Grand Tetons with flowers.",
    description: `A painting of the Grand Tetons with flowers.`,
    type: "painting",
  },
  {
    slug: "girlhood",
    thumb: girlhoodThumb,
    frameColor: "bg-ice",
    mainImage: girlhood,
    title: "Girlhood",
    alt: "A painting of the artist's daughter on a tricycle in a green yard.",
    description: `A painting of the artist's daughter on a tricycle in a green yard.`,
    type: "painting",
  },
  {
    slug: "petit-cove",
    thumb: petitcoveThumb,
    frameColor: "bg-pink",
    mainImage: petitcove,
    title: "Petit Cove",
    alt: "A painting of a cove at Le Rocher et le Belvédère at Versailles. ",
    description: `A painting of a cove at Le Rocher et le Belvédère at Versailles.`,
    type: "painting",
  },
  {
    slug: "settled",
    thumb: settledThumb,
    frameColor: "bg-green",
    mainImage: settled,
    title: "Settled",
    alt: "A painting of a mountain with a field of flowers",
    description: `A painting of a mountain with a field of flowers.`,
    type: "painting",
  },
  {
    slug: "old-well-er",
    thumb: wellerThumb,
    frameColor: "bg-yellow",
    mainImage: weller,
    title: "Old Well(er)",
    alt: "A painting of the Old Well at Chapel Hill in NC.",
    description: `A painting of the Old Well at Chapel Hill in NC.`,
    type: "painting",
  },
  {
    slug: "san-juan",
    thumb: sanjuanThumb,
    frameColor: "bg-ice",
    mainImage: sanjuan,
    title: "San Juan",
    alt: "A painting of the sea as seen from a Spanish Fort in San Juan",
    description: `A painting of the sea as seen from a Spanish Fort in San Juan.`,
    type: "painting",
  },
  {
    slug: "how-could-i-forget",
    thumb: forgetThumb,
    frameColor: "bg-cerulean",
    mainImage: forget,
    title: "How Could I Forget?",
    alt: "A painting of a field of poppies with a deteriorating roman statue.",
    description: `A painting of a field of poppies with a deteriorating roman statue.`,
    type: "painting",
  },
  {
    slug: "home",
    thumb: homeThumb,
    frameColor: "bg-red",
    mainImage: home,
    title: "Home",
    alt: "A painting of a brick house surrounded by trees.",
    description: `A painting of a brick house surrounded by trees.`,
    type: "painting",
  },
  {
    slug: "sunny-disposition",
    thumb: blairThumb,
    frameColor: "bg-pink",
    mainImage: blair,
    title: "Sunny Disposition",
    alt: "A painting of the Blair Building in Decatur, GA.",
    description: `A painting of the Blair Building in Decatur, GA.`,
    type: "painting",
  },
  {
    slug: "the-boxer",
    thumb: boxerThumb,
    frameColor: "bg-yellow",
    mainImage: boxer,
    title: "The Boxer",
    alt: "A painting of Cockburn Street in Edinburgh at night.",
    description: `A painting of Cockburn Street in Edinburgh at night.`,
    type: "painting",
  },
  {
    slug: "secret-garden",
    thumb: secretgardenThumb,
    frameColor: "bg-ice",
    mainImage: secretgarden,
    title: "Secret Garden",
    alt: "A painting of a garden with a gazebo and a willow.",
    description: `A painting of a garden with a gazebo and a willow.`,
    type: "painting",
  },
  {
    slug: "waterlilies",
    thumb: waterliliesThumb,
    frameColor: "bg-red",
    mainImage: waterlilies,
    title: "Waterlilies",
    alt: "A painting of waterlilies with wisteria - an homage to Monet.",
    description: `A painting of waterlilies with wisteria - an homage to Monet.`,
    type: "painting",
  },
  {
    slug: "cosmonaut",
    thumb: cosmoThumb,
    frameColor: "bg-yellow",
    mainImage: cosmo,
    title: "Cosmonaut",
    alt: "A painting of a black cat hiding in a plant.",
    description: `A painting of a black cat hiding in a plant.`,
    type: "painting",
  },
  {
    slug: "dexter",
    thumb: dexterThumb,
    frameColor: "bg-cerulean",
    mainImage: dexter,
    title: "Dexter",
    alt: "A painting of a green quaker parrot on an orange background.",
    description: `A painting of a green quaker parrot on an orange background.`,
    type: "painting",
  },
  {
    slug: "yoshimi",
    thumb: yoshiThumb,
    frameColor: "bg-green",
    mainImage: yoshimi,
    title: "Yoshimi",
    alt: "A painting of a galah named Yoshi.",
    description: `A painting of a galah named Yoshi.`,
    type: "painting",
  },
  {
    slug: "mandy",
    thumb: mandyThumb,
    frameColor: "bg-pink",
    mainImage: mandy,
    title: "Mandy",
    alt: "A painting of a dog named Mandy.",
    description: `A painting of a dog named Mandy.`,
    type: "painting",
  },
];

export default art;
