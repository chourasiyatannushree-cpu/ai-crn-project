import sqlite3

conn = sqlite3.connect("crm.db", check_same_thread=False)
cursor = conn.cursor()

cursor.execute(
    """
CREATE TABLE IF NOT EXISTS interactions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    doctor_name TEXT,
    product TEXT,
    notes TEXT
)
"""
)

conn.commit()
