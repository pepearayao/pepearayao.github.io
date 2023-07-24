import psycopg2
"""
# Connect to old database
conn = psycopg2.connect(host="db-ro-postgresql-nyc1-41426-do-user-13317905-0.b.db.ondigitalocean.com", user="doadmin", port="25060", password="AVNS_eaZY5yJcrwBOS91mN6f", database="entremed")
cur = conn.cursor()

offset = 0
limit = 50

while True:
    cur.execute(f"SELECT title,link,service,company,region,comuna,job_type,salary,published_on,experience_years,description FROM raw_job_offers WHERE raw_job_offer_id>13481 ORDER BY raw_job_offer_id ASC LIMIT {limit} OFFSET {offset}")
    rows = cur.fetchall()
    if not rows:
        break
    for row in rows:
        conn2 = psycopg2.connect(host="db-postgresql-nyc1-41027-do-user-13317905-0.b.db.ondigitalocean.com", user="doadmin", port="25060", password="AVNS_eaZY5yJcrwBOS91mN6f", database="paso")
        cur2 = conn2.cursor()

        title = row[0]
        destination_link = row[1]
        web_service = row[2].capitalize()
        company = row[3]
        location = str(row[5] or "") + ", " + str(row[4] or "")
        job_type = row[6]
        salary = row[7]
        scanned_on = row[8]
        experience = row[9]
        description = row[10]

        cur2.execute("INSERT INTO raw_paso\
                     (title,\
                     destination_link,\
                     web_service,\
                     company,\
                     location,\
                     job_type,\
                     salary,\
                     scanned_on,\
                     experience,\
                     description)\
                     VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",\
                    (title,\
                    destination_link,\
                    web_service,\
                    company,\
                    location,\
                    job_type,\
                    salary,\
                    scanned_on,
                    experience,
                    description)
                    )
        print(row[0], " INGRESADO EXITOSAMENTE")

        conn2.commit()
        cur2.close()
        conn2.close()
    offset += limit #

# Close connection
cur.close()
conn.close()

"""

# Connect to old database
conn = psycopg2.connect(host="db-ro-postgresql-nyc1-41426-do-user-13317905-0.b.db.ondigitalocean.com", user="doadmin", port="25060", password="AVNS_eaZY5yJcrwBOS91mN6f", database="paso")
cur = conn.cursor()

offset = 0
limit = 50

while True:
    cur.execute(f"SELECT title,destination_link,web_service,company,location,job_type,salary,scanned_on,experience,description FROM raw_paso ORDER BY id ASC LIMIT {limit} OFFSET {offset}")
    rows = cur.fetchall()
    if not rows:
        break
    for row in rows:
        conn2 = psycopg2.connect(host="normalized-database-do-user-13317905-0.b.db.ondigitalocean.com", user="doadmin", port="25060", password="AVNS_xgvCO2l8Cu1PATzQCil", database="entremed_remoto")
        cur2 = conn2.cursor()

        title = str(row[0] or "")
        origin_link = " "
        destination_link = str(row[1] or "")
        web_service = str(row[2] or "")
        company = str(row[3] or "")
        location = str(row[4] or "")
        job_type = str(row[5] or "")
        salary = str(row[6] or "")
        scanned_on = str(row[7] or "")
        experience = str(row[8] or "")
        description = str(row[9] or "")

        cur2.execute("INSERT INTO raw_job_offers\
                     (title,\
                     origin_link,\
                     destination_link,\
                     web_service,\
                     company,\
                     location,\
                     job_type,\
                     salary,\
                     scanned_on,\
                     experience,\
                     description)\
                     VALUES (%s,%s, %s, %s, %s, %s, %s, %s, %s, %s, %s)",\
                    (title,\
                    origin_link,\
                    destination_link,\
                    web_service,\
                    company,\
                    location,\
                    job_type,\
                    salary,\
                    scanned_on,
                    experience,
                    description)
                    )#
        print(row[0], " INGRESADO EXITOSAMENTE")

        conn2.commit()
        cur2.close()
        conn2.close()
    offset += limit #

# Close connection
cur.close()
conn.close()
