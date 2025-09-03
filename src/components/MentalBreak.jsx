export default function MentalBreak() {
    const breakRecom = [
        "Remember to stand up for a while and stretch your body.",
        "It's a great time to hydrate yourself. Drink a glass of water.",
        "Wanna do some situps? Just 10 will do!",
        "How about a quick walk around the house or office?",
        "Is there a window nearby? Look outside and take a few deep breaths.",
        "Do some neck and shoulder rolls to relieve tension.",
        "Shake your hands and roll your wrists to get the blood flowing.",
        "Do you need a snack? Go get it! You deserve it.",
        "Do you need a bathroom break? Go ahead!",
        "Move away from your screen for a few minutes to rest your eyes.",
    ]
    const randomIndex = Math.floor(Math.random() * breakRecom.length);
    const randomRecom = breakRecom[randomIndex];
    return (
        <p className="BreakRecom">{randomRecom}</p>
    )
}