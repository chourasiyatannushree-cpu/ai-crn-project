from database import cursor, conn


def log_interaction(data):
    cursor.execute(
        "INSERT INTO interactions (doctor_name, product, notes) VALUES (?, ?, ?)",
        (data["doctor_name"], data["product"], data["notes"]),
    )
    conn.commit()
    return {"message": "Interaction logged"}


def edit_interaction(data):
    cursor.execute(
        "UPDATE interactions SET notes=? WHERE id=?", (data["notes"], data["id"])
    )
    conn.commit()
    return {"message": "Updated successfully"}


def get_interactions():
    cursor.execute("SELECT * FROM interactions")
    return cursor.fetchall()


def suggest_next_action():
    return {"suggestion": "Follow up after 2 days"}


def generate_report():
    cursor.execute("SELECT COUNT(*) FROM interactions")
    count = cursor.fetchone()[0]
    return {"report": f"Total interactions: {count}"}
