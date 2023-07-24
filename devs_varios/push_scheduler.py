import psycopg2
from entremed.entremed.spiders import create_connection


while True:
    conn = create_connection()
    cur = conn.cursor()

    cur.execute("select filtered_job_id from filtered_job_offers where scheduled = false")
    filtered_job_ids = cur.fetchall()

    cur.close()
    conn.close()

    for item in filtered_job_ids:
        conn = create_connection()
        cur = conn.cursor()

        cur.execute("insert into push_job_offers (filtered_job_id, 

