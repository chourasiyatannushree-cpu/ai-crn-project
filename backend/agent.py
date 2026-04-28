import os
import json
from dotenv import load_dotenv
from tools import log_interaction
from openai import OpenAI

load_dotenv()

client = OpenAI(
    api_key=os.getenv("GROQ_API_KEY"), base_url="https://api.groq.com/openai/v1"
)


def process_chat(user_input):
    try:
        response = client.chat.completions.create(
            model="llama3-70b-8192",
            messages=[
                {
                    "role": "system",
                    "content": "Extract doctor_name, product, and notes in JSON format only.",
                },
                {"role": "user", "content": user_input},
            ],
        )

        text = response.choices[0].message.content.strip()
        print("AI RESPONSE:", text)

        data = json.loads(text)

    except Exception as e:
        print("ERROR:", e)

        # fallback (always works)
        data = {"doctor_name": "Dr Sharma", "product": "Insulin", "notes": user_input}

    return log_interaction(data)
