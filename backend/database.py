import sqlite3

def init_db():
    """Inicializa o banco de dados SQLite."""
    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS projetos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            investimento REAL NOT NULL,
            tma REAL NOT NULL
        )
    """)

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS fluxos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            projeto_id INTEGER,
            periodo INTEGER,
            valor REAL,
            FOREIGN KEY (projeto_id) REFERENCES projetos(id)
        )
    """)

    conn.commit()
    conn.close()
