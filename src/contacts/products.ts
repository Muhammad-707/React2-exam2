export interface IProduct {
  id: number;
  name: string;
  price: number;
  oldPrice: number | null;
  category: string;
  sku: string;
  image: string;
  images: string[];
}

export const productNamesMapping: { [key: string]: string } = {
  "Barberton Daisy": "text39",
  "Angel Wing Begonia": "text40",
  "African Violet": "text41",
  "Beach Spider Lily": "text42",
  "Blushing Bromeliad": "text43",
  "Aluminum Plant": "text44",
  "Bird's Nest Fern": "text45",
  "Broadleaf Lady Palm": "text46",
  "Chinese Evergreen": "text47",
  "Mini Echeveria": "text48",
  "Zebra Haworthia": "text49",
  "Geometric Eco Glass": "text50",
  "Hexagon Mossarium": "text51",
  "Organic Tomato Seeds": "text52",
  "Wildflower Mix Seeds": "text53",
  "Ergonomic Pruning Shears": "text54",
  "Premium Plant Food Spray": "text55",
  "Minimalist Ceramic Saucer": "text56"
};

export const productCategoriesMapping: { [key: string]: string } = {
  "House Plants": "text57",
  "Potter Plants": "text58",
  "Small Plants": "text59",
  "Big Plants": "text60",
  "Succulents": "text61",
  "Trerrariums": "text62",
  "Seeds": "text63",
  "Gardening": "text64",
  "Accessories": "text65"
};

export const PRODUCTS_DATA: IProduct[] = [
  { "id": 1, "name": "Barberton Daisy", "price": 199.00, "oldPrice": null, "category": "House Plants", "sku": "1995758277966", "image": "https://tse2.mm.bing.net/th/id/OIP.r-pumDK7bK9Fcl6EpqufpwHaGo?pid=ImgDet&w=180&h=161&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse2.mm.bing.net/th/id/OIP.r-pumDK7bK9Fcl6EpqufpwHaGo?pid=ImgDet&w=180&h=161&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 2, "name": "Angel Wing Begonia", "price": 169.00, "oldPrice": null, "category": "House Plants", "sku": "19305824", "image": "https://tse3.mm.bing.net/th/id/OIP.mJp5t_zzvEnvWlYjbpytVQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", "images": ["https://tse3.mm.bing.net/th/id/OIP.mJp5t_zzvEnvWlYjbpytVQAAAA?rs=1&pid=ImgDetMain&o=7&rm=3"] },
  { "id": 3, "name": "African Violet", "price": 199.00, "oldPrice": 229.00, "category": "House Plants", "sku": "85039211", "image": "https://tse3.mm.bing.net/th/id/OIP.Oz_nbLDZp3k2NC8k5nqNWQAAAA?pid=ImgDet&w=180&h=247&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse3.mm.bing.net/th/id/OIP.Oz_nbLDZp3k2NC8k5nqNWQAAAA?pid=ImgDet&w=180&h=247&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 4, "name": "Beach Spider Lily", "price": 129.00, "oldPrice": null, "category": "Potter Plants", "sku": "39401953", "image": "https://www.bing.com/th/id/OIP.zBKxmikIcWfxfeTMzeoxLgHaHa?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP.zBKxmikIcWfxfeTMzeoxLgHaHa?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 5, "name": "Blushing Bromeliad", "price": 139.00, "oldPrice": null, "category": "Potter Plants", "sku": "58204917", "image": "https://www.bing.com/th/id/OIP.xkkTFbMgX7V8nIaI8ay-gAHaHa?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP.xkkTFbMgX7V8nIaI8ay-gAHaHa?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 6, "name": "Aluminum Plant", "price": 179.00, "oldPrice": null, "category": "Potter Plants", "sku": "72940516", "image": "https://www.bing.com/th/id/OIP.bZX8akt_4CO33J0FcckFXAAAAA?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP.bZX8akt_4CO33J0FcckFXAAAAA?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 7, "name": "Bird's Nest Fern", "price": 99.00, "oldPrice": null, "category": "Small Plants", "sku": "20495813", "image": "https://www.bing.com/th/id/OIP.LWpemSOhZXmNc7k1EEjD7wAAAA?w=188&h=146&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP.LWpemSOhZXmNc7k1EEjD7wAAAA?w=188&h=146&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 8, "name": "Broadleaf Lady Palm", "price": 59.00, "oldPrice": null, "category": "Big Plants", "sku": "60394812", "image": "https://www.bing.com/th/id/OIP.VmERfVwgNwKosI14STozSwAAAA?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP.VmERfVwgNwKosI14STozSwAAAA?w=188&h=188&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 9, "name": "Chinese Evergreen", "price": 39.00, "oldPrice": null, "category": "Small Plants", "sku": "84920481", "image": "https://www.bing.com/th/id/OIP._LoNpylwmC6f37xSlbnVtwHaM-?w=188&h=329&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP._LoNpylwmC6f37xSlbnVtwHaM-?w=188&h=329&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 10, "name": "Mini Echeveria", "price": 24.00, "oldPrice": null, "category": "Succulents", "sku": "57391045", "image": "https://tse2.mm.bing.net/th/id/OIP.oUv3r-yFDldCWE_OqrVjkwAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse2.mm.bing.net/th/id/OIP.oUv3r-yFDldCWE_OqrVjkwAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3",""] },
  { "id": 11, "name": "Zebra Haworthia", "price": 29.00, "oldPrice": 35.00, "category": "Succulents", "sku": "10495822", "image": "https://tse4.mm.bing.net/th/id/OIP.pokfc-ODbml9L6Pg7Au_4gHaHm?pid=ImgDet&w=180&h=184&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse4.mm.bing.net/th/id/OIP.pokfc-ODbml9L6Pg7Au_4gHaHm?pid=ImgDet&w=180&h=184&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 12, "name": "Geometric Eco Glass", "price": 89.00, "oldPrice": null, "category": "Trerrariums", "sku": "93048512", "image": "https://tse1.mm.bing.net/th/id/OIP.anWlN3IJFwbONbO2bvrqgAAAAA?pid=ImgDet&w=180&h=247&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse1.mm.bing.net/th/id/OIP.anWlN3IJFwbONbO2bvrqgAAAAA?pid=ImgDet&w=180&h=247&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 13, "name": "Hexagon Mossarium", "price": 75.00, "oldPrice": null, "category": "Trerrariums", "sku": "47291049", "image": "https://tse1.mm.bing.net/th/id/OIP.r213f4iIewoqj6K0pSdmvAAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse1.mm.bing.net/th/id/OIP.r213f4iIewoqj6K0pSdmvAAAAA?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 14, "name": "Organic Tomato Seeds", "price": 12.00, "oldPrice": null, "category": "Seeds", "sku": "29401945", "image": "https://tse2.mm.bing.net/th/id/OIP.3twOEpcb02VEPyZmujMqqQHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse2.mm.bing.net/th/id/OIP.3twOEpcb02VEPyZmujMqqQHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 15, "name": "Wildflower Mix Seeds", "price": 18.00, "oldPrice": 22.00, "category": "Seeds", "sku": "83910482", "image": "https://www.bing.com/th/id/OIP.LHdPzFVj10hgPZuFVGma1QAAAA?w=188&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2", "images": ["https://www.bing.com/th/id/OIP.LHdPzFVj10hgPZuFVGma1QAAAA?w=188&h=197&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"] },
  { "id": 16, "name": "Ergonomic Pruning Shears", "price": 45.00, "oldPrice": null, "category": "Gardening", "sku": "50392814", "image": "https://tse3.mm.bing.net/th/id/OIP.k6m3aPni1ONl2cvqZRtC1QHaP9?pid=ImgDet&w=162&h=350&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse3.mm.bing.net/th/id/OIP.k6m3aPni1ONl2cvqZRtC1QHaP9?pid=ImgDet&w=162&h=350&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 17, "name": "Premium Plant Food Spray", "price": 19.00, "oldPrice": null, "category": "Gardening", "sku": "19482039", "image": "https://tse4.mm.bing.net/th/id/OIP.VkDOjsC-aexb_rDlbMFxMgHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse4.mm.bing.net/th/id/OIP.VkDOjsC-aexb_rDlbMFxMgHaHa?pid=ImgDet&w=180&h=180&c=7&dpr=1.3&o=7&rm=3"] },
  { "id": 18, "name": "Minimalist Ceramic Saucer", "price": 15.00, "oldPrice": null, "category": "Accessories", "sku": "74920184", "image": "https://tse3.mm.bing.net/th/id/OIP.MeuaD9EXywbnFqHH00un_wAAAA?pid=ImgDet&w=180&h=232&c=7&dpr=1.3&o=7&rm=3", "images": ["https://tse3.mm.bing.net/th/id/OIP.MeuaD9EXywbnFqHH00un_wAAAA?pid=ImgDet&w=180&h=232&c=7&dpr=1.3&o=7&rm=3"] }
];