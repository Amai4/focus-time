export default function MentalRest() {
    const restRecom = [
        "Meditate for 10 minutes today. Just sit quietly -maybe with some calming music- and focus on your breath, the here and the now.",
        "Gift your body some movement. Stretch, walk, dance, do yoga or strength training, anything of your preference. Just move your body for at least 10 minutes today.",
        "Dedicate 10 minutes to anything that makes you laugh. Maybe watch a funny video, play with a pet, call a friend, anything that brings you joy today.",
        "Think of 3 things you are grateful for today. Anything, big or small.",
        "Think of 3 things that went well today. Anything, big or small.",
        "If you can, go outside and connect with nature for at least 10 minutes. Feel the sun, the wind, the fresh air, listen to the birds, observe the trees. If that's not possible for you, just look out the window and observe the sky.",
        "Breathe deeply for 5 minutes. Inhale deeply through your nose, hold for a few seconds, and exhale slowly through your mouth.",
        "Do some stretches for 10 minutes. Focus on your neck, shoulders, wrists, back, hips, and legs.",
        "Step away from yor workspace and change your environment for at least 10 minutes. Go to another room, go outside, or simply move to a different spot in your current space.",
        "Spend 10 minutes away from screens. Maybe read a book, listen to music, or simply close your eyes and relax.",
        "Sleep for at least 7-8 hours tonight. A good night's sleep is crucial for mental rest and overall well-being.",
        "Take a short nap of 20-30 minutes if you feel tired during the day. A quick nap can help recharge your energy and improve focus.",
    ]
    const randomIndex = Math.floor(Math.random() * restRecom.length);
    const randomRecom = restRecom[randomIndex];
    return (
        <p>{randomRecom}</p>
    )
}