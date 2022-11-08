const getData = async function () {
  const res = await fetch("https://acnhapi.com/v1a/villagers");
  const data = await res.json();
  const newData = data.map((villager) => ({
    name: villager.name["name-USen"],
    personality: villager.personality,
    species: villager.species,
    catchphrase: villager["catch-phrase"],
    icon: villager["icon_uri"],
    image: villager["image_uri"]
  }));
  console.log(newData);
};

export default function HandleAPI() {
  getData();
}
