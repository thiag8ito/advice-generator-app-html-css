const btn = document.querySelector(".advice-update");
const adviceNum = document.querySelector(".advice-id")
const advice = document.querySelector(".advice-description");

btn.addEventListener("click", () => {
    generateNewAdvice();
});

async function generateNewAdvice() {
    try {
        const response = await fetch("https://api.adviceslip.com/advice");

        if(!response.ok) {
            throw new Error ("Error trying to fetch for API informations");
        }

        const json = await response.json();        
        const adviceId = `Advice #${json.slip.id}`;
        const adviceText = `${json.slip.advice}`;
        adviceNum.innerText = adviceId;
        advice.innerText = adviceText;
    } catch(err) {
        console.log(err);
    }
}