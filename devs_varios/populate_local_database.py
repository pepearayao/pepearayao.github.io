import psycopg2

try:
    conn = psycopg2.connect(
    host =  "localhost",
    database = "entremedv2",
    user = "postgres",
    password = "Parisdrakkar5",
    port = "5432")

except Exception as e:
    print(f"The error '{e}' occurred")

cur = conn.cursor()

#Web Services
cur.execute("DROP TABLE IF EXISTS web_services CASCADE;\
            CREATE TABLE web_services ( \
            web_service_id int NOT NULL,\
            web_service_name varchar NOT NULL,\
            PRIMARY KEY (web_service_id) \
            );\
            INSERT INTO web_services (web_service_id,web_service_name) \
            VALUES \
            (1, 'Buscojobs'),\
            (2, 'Computrabajo'),\
            (3, 'Chiletrabajos'),\
            (4, 'Laborum'),\
            (5, 'Trabajando'),\
            (6, 'Estado');\
            ")
conn.commit()
print("Web Services created successfully")
#replicate last print after every table creation    
# Urls
cur.execute("DROP TABLE IF EXISTS urls CASCADE;\
            CREATE TABLE urls ( \
            url_id int NOT NULL,\
            web_service_id int NOT NULL REFERENCES web_services (web_service_id),\
            url varchar NOT NULL,\
            PRIMARY KEY (url_id) \
            );\
            INSERT INTO urls (url_id,url,web_service_id) \
            VALUES \
            (1, 'https://www.buscojobs.cl/ofertas/enfermera_?fechainicio=1', 1),\
            (2, 'https://www.buscojobs.cl/ofertas/enfermeria_?fechainicio=1', 1),\
            (3, 'https://www.buscojobs.cl/ofertas/enfermero_?fechainicio=1', 1),\
            (4, 'https://www.buscojobs.cl/ofertas/tens_?fechainicio=1', 1),\
            (5, 'https://www.buscojobs.cl/ofertas/tecnico-en-enfermeria_?fechainicio=1', 1),\
            (6, 'https://www.buscojobs.cl/ofertas/odontologo_?fechainicio=1', 1),\
            (7, 'https://www.buscojobs.cl/ofertas/odontologa_?fechainicio=1', 1),\
            (8, 'https://www.buscojobs.cl/ofertas/odontologia_?fechainicio=1', 1),\
            (9, 'https://www.buscojobs.cl/ofertas/dentista_?fechainicio=1', 1),\
            (10, 'https://www.buscojobs.cl/ofertas/kinesiologia_?fechainicio=1', 1),\
            (11, 'https://www.buscojobs.cl/ofertas/kinesiologo_?fechainicio=1', 1),\
            (12, 'https://www.buscojobs.cl/ofertas/psicologo_?fechainicio=1', 1),\
            (13, 'https://www.buscojobs.cl/ofertas/psicologia_?fechainicio=1', 1),\
            (14, 'https://www.buscojobs.cl/ofertas/psicopedagogo_?fechainicio=1', 1),\
            (15, 'https://www.buscojobs.cl/ofertas/psicopedagogia_?fechainicio=1', 1),\
            (16, 'https://www.buscojobs.cl/ofertas/fonoaudiologo_?fechainicio=1', 1),\
            (17, 'https://www.buscojobs.cl/ofertas/fonoaudiologia_?fechainicio=1', 1),\
            (18, 'https://www.buscojobs.cl/ofertas/nutricionista_?fechainicio=1', 1),\
            (19, 'https://www.buscojobs.cl/ofertas/nutricion_?fechainicio=1', 1),\
            (20, 'https://www.buscojobs.cl/ofertas/paramedico_?fechainicio=1', 1),\
            (21, 'https://www.buscojobs.cl/ofertas/matrona_?fechainicio=1', 1),\
            (22, 'https://www.buscojobs.cl/ofertas/matrones_?fechainicio=1', 1),\
            (23,'https://www.computrabajo.cl/trabajo-de-tens-en-rmetropolitana?by=publicationtime', 2),\
            (24,'https://www.computrabajo.cl/trabajo-de-tens-en-valparaiso?by=publicationtime', 2),\
            (25,'https://www.computrabajo.cl/trabajo-de-tens-en-biobio?by=publicationtime', 2),\
            (26,'https://www.computrabajo.cl/trabajo-de-tens-en-antofagasta?by=publicationtime', 2),\
            (27,'https://www.computrabajo.cl/trabajo-de-tens-en-los-lagos?by=publicationtime', 2),\
            (28,'https://www.computrabajo.cl/trabajo-de-tens-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (29,'https://www.computrabajo.cl/trabajo-de-tens-en-maule?by=publicationtime', 2),\
            (30,'https://www.computrabajo.cl/trabajo-de-tens-en-coquimbo?by=publicationtime', 2),\
            (31,'https://www.computrabajo.cl/trabajo-de-tens-en-araucania?by=publicationtime', 2),\
            (32,'https://www.computrabajo.cl/trabajo-de-tens-en-atacama?by=publicationtime', 2),\
            (33,'https://www.computrabajo.cl/trabajo-de-tens-en-tarapaca?by=publicationtime', 2),\
            (34,'https://www.computrabajo.cl/trabajo-de-tens-en-los-rios?by=publicationtime', 2),\
            (35,'https://www.computrabajo.cl/trabajo-de-tens-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (36,'https://www.computrabajo.cl/trabajo-de-enfermera-en-rmetropolitana?by=publicationtime', 2),\
            (37,'https://www.computrabajo.cl/trabajo-de-enfermera-en-valparaiso?by=publicationtime', 2),\
            (38,'https://www.computrabajo.cl/trabajo-de-enfermera-en-biobio?by=publicationtime', 2),\
            (39,'https://www.computrabajo.cl/trabajo-de-enfermera-en-antofagasta?by=publicationtime', 2),\
            (40,'https://www.computrabajo.cl/trabajo-de-enfermera-en-los-lagos?by=publicationtime', 2),\
            (41,'https://www.computrabajo.cl/trabajo-de-enfermera-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (42,'https://www.computrabajo.cl/trabajo-de-enfermera-en-maule?by=publicationtime', 2),\
            (43,'https://www.computrabajo.cl/trabajo-de-enfermera-en-coquimbo?by=publicationtime', 2),\
            (44,'https://www.computrabajo.cl/trabajo-de-enfermera-en-araucania?by=publicationtime', 2),\
            (45,'https://www.computrabajo.cl/trabajo-de-enfermera-en-atacama?by=publicationtime', 2),\
            (46,'https://www.computrabajo.cl/trabajo-de-enfermera-en-tarapaca?by=publicationtime', 2),\
            (47,'https://www.computrabajo.cl/trabajo-de-enfermera-en-los-rios?by=publicationtime', 2),\
            (48,'https://www.computrabajo.cl/trabajo-de-enfermera-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (49,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-rmetropolitana?by=publicationtime', 2),\
            (50,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-valparaiso?by=publicationtime', 2),\
            (51,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-biobio?by=publicationtime', 2),\
            (52,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-antofagasta?by=publicationtime', 2),\
            (53,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-los-lagos?by=publicationtime', 2),\
            (54,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (55,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-maule?by=publicationtime', 2),\
            (56,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-coquimbo?by=publicationtime', 2),\
            (57,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-araucania?by=publicationtime', 2),\
            (58,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-atacama?by=publicationtime', 2),\
            (59,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-tarapaca?by=publicationtime', 2),\
            (60,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-los-rios?by=publicationtime', 2),\
            (61,'https://www.computrabajo.cl/trabajo-de-kinesiologo-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (62,'https://www.computrabajo.cl/trabajo-de-odontologo-en-rmetropolitana?by=publicationtime', 2),\
            (63,'https://www.computrabajo.cl/trabajo-de-odontologo-en-valparaiso?by=publicationtime', 2),\
            (64,'https://www.computrabajo.cl/trabajo-de-odontologo-en-biobio?by=publicationtime', 2),\
            (65,'https://www.computrabajo.cl/trabajo-de-odontologo-en-antofagasta?by=publicationtime', 2),\
            (66,'https://www.computrabajo.cl/trabajo-de-odontologo-en-los-lagos?by=publicationtime', 2),\
            (67,'https://www.computrabajo.cl/trabajo-de-odontologo-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (68,'https://www.computrabajo.cl/trabajo-de-odontologo-en-maule?by=publicationtime', 2),\
            (69,'https://www.computrabajo.cl/trabajo-de-odontologo-en-coquimbo?by=publicationtime', 2),\
            (70,'https://www.computrabajo.cl/trabajo-de-odontologo-en-araucania?by=publicationtime', 2),\
            (71,'https://www.computrabajo.cl/trabajo-de-odontologo-en-atacama?by=publicationtime', 2),\
            (72,'https://www.computrabajo.cl/trabajo-de-odontologo-en-tarapaca?by=publicationtime', 2),\
            (73,'https://www.computrabajo.cl/trabajo-de-odontologo-en-los-rios?by=publicationtime', 2),\
            (74,'https://www.computrabajo.cl/trabajo-de-odontologo-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (75,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-rmetropolitana?by=publicationtime', 2),\
            (76,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-valparaiso?by=publicationtime', 2),\
            (77,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-biobio?by=publicationtime', 2),\
            (78,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-antofagasta?by=publicationtime', 2),\
            (79,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-los-lagos?by=publicationtime', 2),\
            (80,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (81,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-maule?by=publicationtime', 2),\
            (82,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-coquimbo?by=publicationtime', 2),\
            (83,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-araucania?by=publicationtime', 2),\
            (84,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-atacama?by=publicationtime', 2),\
            (85,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-tarapaca?by=publicationtime', 2),\
            (86,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-los-rios?by=publicationtime', 2),\
            (87,'https://www.computrabajo.cl/trabajo-de-psicopedagogo-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (88,'https://www.computrabajo.cl/trabajo-de-psicologo-en-rmetropolitana?by=publicationtime', 2),\
            (89,'https://www.computrabajo.cl/trabajo-de-psicologo-en-valparaiso?by=publicationtime', 2),\
            (90,'https://www.computrabajo.cl/trabajo-de-psicologo-en-biobio?by=publicationtime', 2),\
            (91,'https://www.computrabajo.cl/trabajo-de-psicologo-en-antofagasta?by=publicationtime', 2),\
            (92,'https://www.computrabajo.cl/trabajo-de-psicologo-en-los-lagos?by=publicationtime', 2),\
            (93,'https://www.computrabajo.cl/trabajo-de-psicologo-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (94,'https://www.computrabajo.cl/trabajo-de-psicologo-en-maule?by=publicationtime', 2),\
            (95,'https://www.computrabajo.cl/trabajo-de-psicologo-en-coquimbo?by=publicationtime', 2),\
            (96,'https://www.computrabajo.cl/trabajo-de-psicologo-en-araucania?by=publicationtime', 2),\
            (97,'https://www.computrabajo.cl/trabajo-de-psicologo-en-atacama?by=publicationtime', 2),\
            (98,'https://www.computrabajo.cl/trabajo-de-psicologo-en-tarapaca?by=publicationtime', 2),\
            (99,'https://www.computrabajo.cl/trabajo-de-psicologo-en-los-rios?by=publicationtime', 2),\
            (100,'https://www.computrabajo.cl/trabajo-de-psicologo-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (101,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-rmetropolitana?by=publicationtime', 2),\
            (102,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-valparaiso?by=publicationtime', 2),\
            (103,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-biobio?by=publicationtime', 2),\
            (104,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-antofagasta?by=publicationtime', 2),\
            (105,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-los-lagos?by=publicationtime', 2),\
            (106,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (107,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-maule?by=publicationtime', 2),\
            (108,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-coquimbo?by=publicationtime', 2),\
            (109,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-araucania?by=publicationtime', 2),\
            (110,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-atacama?by=publicationtime', 2),\
            (111,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-tarapaca?by=publicationtime', 2),\
            (112,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-los-rios?by=publicationtime', 2),\
            (113,'https://www.computrabajo.cl/trabajo-de-fonoaudiologo-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (114,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-rmetropolitana?by=publicationtime', 2),\
            (115,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-valparaiso?by=publicationtime', 2),\
            (116,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-biobio?by=publicationtime', 2),\
            (117,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-antofagasta?by=publicationtime', 2),\
            (118,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-los-lagos?by=publicationtime', 2),\
            (119,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (120,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-maule?by=publicationtime', 2),\
            (121,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-coquimbo?by=publicationtime', 2),\
            (122,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-araucania?by=publicationtime', 2),\
            (123,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-atacama?by=publicationtime', 2),\
            (124,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-tarapaca?by=publicationtime', 2),\
            (125,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-los-rios?by=publicationtime', 2),\
            (126,'https://www.computrabajo.cl/trabajo-de-nutricionista-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (127,'https://www.computrabajo.cl/trabajo-de-paramedico-en-rmetropolitana?by=publicationtime', 2),\
            (128,'https://www.computrabajo.cl/trabajo-de-paramedico-en-valparaiso?by=publicationtime', 2),\
            (129,'https://www.computrabajo.cl/trabajo-de-paramedico-en-biobio?by=publicationtime', 2),\
            (130,'https://www.computrabajo.cl/trabajo-de-paramedico-en-antofagasta?by=publicationtime', 2),\
            (131,'https://www.computrabajo.cl/trabajo-de-paramedico-en-los-lagos?by=publicationtime', 2),\
            (132,'https://www.computrabajo.cl/trabajo-de-paramedico-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (133,'https://www.computrabajo.cl/trabajo-de-paramedico-en-maule?by=publicationtime', 2),\
            (134,'https://www.computrabajo.cl/trabajo-de-paramedico-en-coquimbo?by=publicationtime', 2),\
            (135,'https://www.computrabajo.cl/trabajo-de-paramedico-en-araucania?by=publicationtime', 2),\
            (136,'https://www.computrabajo.cl/trabajo-de-paramedico-en-atacama?by=publicationtime', 2),\
            (137,'https://www.computrabajo.cl/trabajo-de-paramedico-en-tarapaca?by=publicationtime', 2),\
            (138,'https://www.computrabajo.cl/trabajo-de-paramedico-en-los-rios?by=publicationtime', 2),\
            (139,'https://www.computrabajo.cl/trabajo-de-paramedico-en-magallanes-y-antartica-chilena?by=publicationtime',  2),\
            (140,'https://www.computrabajo.cl/trabajo-de-matrona-en-rmetropolitana?by=publicationtime', 2),\
            (141,'https://www.computrabajo.cl/trabajo-de-matrona-en-valparaiso?by=publicationtime', 2),\
            (142,'https://www.computrabajo.cl/trabajo-de-matrona-en-biobio?by=publicationtime', 2),\
            (143,'https://www.computrabajo.cl/trabajo-de-matrona-en-antofagasta?by=publicationtime', 2),\
            (144,'https://www.computrabajo.cl/trabajo-de-matrona-en-los-lagos?by=publicationtime', 2),\
            (145,'https://www.computrabajo.cl/trabajo-de-matrona-en-libertador-b-o-higgins?by=publicationtime', 2),\
            (146,'https://www.computrabajo.cl/trabajo-de-matrona-en-maule?by=publicationtime', 2),\
            (147,'https://www.computrabajo.cl/trabajo-de-matrona-en-coquimbo?by=publicationtime', 2),\
            (148,'https://www.computrabajo.cl/trabajo-de-matrona-en-araucania?by=publicationtime', 2),\
            (149,'https://www.computrabajo.cl/trabajo-de-matrona-en-atacama?by=publicationtime', 2),\
            (150,'https://www.computrabajo.cl/trabajo-de-matrona-en-tarapaca?by=publicationtime', 2),\
            (151,'https://www.computrabajo.cl/trabajo-de-matrona-en-los-rios?by=publicationtime', 2),\
            (152,'https://www.computrabajo.cl/trabajo-de-matrona-en-magallanes-y-antartica-chilena?by=publicationtime', 2),\
            (153,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=enfermero&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (154,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=enfermeria&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (155,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=tens&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (156,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=tecnico+en+enfermeria&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (157,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=odontologo&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (158,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=odontologia&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (159,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=kinesiologo&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (160,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=kinesiologia&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (161,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=psicopedagogo&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (162,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=psicopedagogia&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (163,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=psicologo&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (164,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=psicologia&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (165,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=fonoaudiologo&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (166,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=fonoaudiologia&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (167,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=nutricionista&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (168,'https://www.chiletrabajos.cl/encuentra-un-empleo?2=paramedico&13=&fecha=3&categoria=&8=&14=&inclusion=&f=2', 3),\
            (169,'https://www.laborum.cl/empleos-busqueda-enfermera.html?recientes=true', 4),\
            (170,'https://www.laborum.cl/empleos-busqueda-enfermeria.html?recientes=true', 4),\
            (171,'https://www.laborum.cl/empleos-busqueda-tens.html?recientes=true', 4),\
            (172,'https://www.laborum.cl/empleos-busqueda-tecnico-enfermeria.html?recientes=true', 4),\
            (173,'https://www.laborum.cl/empleos-busqueda-odontologo.html?recientes=true', 4),\
            (174,'https://www.laborum.cl/empleos-busqueda-odontologia.html?recientes=true', 4),\
            (175,'https://www.laborum.cl/empleos-busqueda-kinesiologo.html?recientes=true', 4),\
            (176,'https://www.laborum.cl/empleos-busqueda-kinesiologia.html?recientes=true', 4),\
            (177,'https://www.laborum.cl/empleos-busqueda-psicologo.html?recientes=true', 4),\
            (178,'https://www.laborum.cl/empleos-busqueda-psicologia.html?recientes=true', 4),\
            (179,'https://www.laborum.cl/empleos-busqueda-psicopedagogo.html?recientes=true', 4),\
            (180,'https://www.laborum.cl/empleos-busqueda-psicopedagogia.html?recientes=true', 4),\
            (181,'https://www.laborum.cl/empleos-busqueda-fonoaudiologo.html?recientes=true', 4),\
            (182,'https://www.laborum.cl/empleos-busqueda-fonoaudiologia.html?recientes=true', 4),\
            (183,'https://www.laborum.cl/empleos-busqueda-matrona.html?recientes=true', 4),\
            (184,'https://www.laborum.cl/empleos-busqueda-matrones.html?recientes=true', 4),\
            (185,'https://www.laborum.cl/empleos-busqueda-nutricionista.html?recientes=true', 4),\
            (186,'https://www.laborum.cl/empleos-busqueda-paramedico.html?recientes=true', 4),\
            (187,'https://www.trabajando.cl/trabajo-empleo/enfermera?AliasOrden=3', 5),\
            (188,'https://www.trabajando.cl/trabajo-empleo/enfermeria?AliasOrden=3', 5),\
            (189,'https://www.trabajando.cl/trabajo-empleo/tens?AliasOrden=3', 5),\
            (190,'https://www.trabajando.cl/trabajo-empleo/tecnico%20en%20enfermeria?AliasOrden=3', 5),\
            (191,'https://www.trabajando.cl/trabajo-empleo/odontologo?AliasOrden=3', 5),\
            (192,'https://www.trabajando.cl/trabajo-empleo/odontologia?AliasOrden=3', 5),\
            (193,'https://www.trabajando.cl/trabajo-empleo/asistente%20dental?AliasOrden=3', 5),\
            (194,'https://www.trabajando.cl/trabajo-empleo/kinesiologo?AliasOrden=3', 5),\
            (195,'https://www.trabajando.cl/trabajo-empleo/kinesiologia?AliasOrden=3', 5),\
            (196,'https://www.trabajando.cl/trabajo-empleo/psicologo?AliasOrden=3', 5),\
            (197,'https://www.trabajando.cl/trabajo-empleo/psicologia?AliasOrden=3', 5),\
            (198,'https://www.trabajando.cl/trabajo-empleo/psicopedagogo?AliasOrden=3', 5),\
            (199,'https://www.trabajando.cl/trabajo-empleo/fonoaudiologo?AliasOrden=3', 5),\
            (200,'https://www.trabajando.cl/trabajo-empleo/fonoaudiologia?AliasOrden=3', 5),\
            (201,'https://www.trabajando.cl/trabajo-empleo/nutricionista?AliasOrden=3', 5),\
            (202,'https://www.trabajando.cl/trabajo-empleo/paramedico?AliasOrden=3', 5),\
            (203,'https://www.trabajando.cl/trabajo-empleo/matrona?AliasOrden=3', 5),\
            (204,'https://www.trabajando.cl/trabajo-empleo/matrones?AliasOrden=3', 5);\
            ")
conn.commit()
print("Urls created successfully")
# Driving Requirements
cur.execute("DROP TABLE IF EXISTS driving_requirements CASCADE;\
            CREATE TABLE driving_requirements ( \
            driving_requirement_id int NOT NULL,\
            driving_requirement_name varchar NOT NULL,\
            PRIMARY KEY (driving_requirement_id) \
            );\
            INSERT INTO driving_requirements (driving_requirement_id,driving_requirement_name) \
            VALUES \
            (1, 'Clase A1'),\
            (2, 'Clase A2'),\
            (3, 'Clase A3'),\
            (4, 'Clase A4'),\
            (5, 'Clase B'),\
            (6, 'Indeterminado');\
            ")
conn.commit()
print("Driving Requirements created successfully")
# Experience Types
cur.execute("DROP TABLE IF EXISTS experience_types CASCADE;\
            CREATE TABLE experience_types ( \
            experience_type_id int NOT NULL,\
            experience_type_name varchar NOT NULL,\
            PRIMARY KEY (experience_type_id) \
            );\
            INSERT INTO experience_types (experience_type_id,experience_type_name) \
            VALUES \
            (1, 'Junior'),\
            (2, 'Semi Senior'),\
            (3, 'Senior'),\
            (4, 'Indeterminado');\
            ")
conn.commit()
print("Experience Types created successfully")
# Contract Types
cur.execute("DROP TABLE IF EXISTS contract_types CASCADE;\
            CREATE TABLE contract_types ( \
            contract_type_id int NOT NULL,\
            contract_type_name varchar NOT NULL,\
            PRIMARY KEY (contract_type_id) \
            );\
            INSERT INTO contract_types (contract_type_id,contract_type_name) \
            VALUES \
            (1, 'Indefinido'),\
            (2, 'Plazo Fijo + Indefinido'),\
            (3, 'Plazo Fijo'),\
            (4, 'Honorarios'),\
            (5, 'Indeterminado');\
            ")
conn.commit()
print("Contract Types created successfully")
# Shift Types
cur.execute("DROP TABLE IF EXISTS shift_types CASCADE;\
            CREATE TABLE shift_types ( \
            shift_type_id int NOT NULL,\
            shift_type_name varchar NOT NULL,\
            PRIMARY KEY (shift_type_id) \
            );\
            INSERT INTO shift_types (shift_type_id,shift_type_name) \
            VALUES \
            (1, '4º Turno'),\
            (2, '4º Turno Modificado'),\
            (3, '3er Turno'),\
            (4, 'Otro Tipo de Turno'),\
            (5, 'Indeterminado');\
            ")
conn.commit()
print("Shift Types created successfully")
# Job Types
cur.execute("DROP TABLE IF EXISTS job_types CASCADE;\
            CREATE TABLE job_types ( \
            job_type_id int NOT NULL,\
            job_type_name varchar NOT NULL,\
            PRIMARY KEY (job_type_id) \
            );\
            INSERT INTO job_types (job_type_id,job_type_name) \
            VALUES \
            (1, 'Full-Time Extendido'),\
            (2, 'Full-Time'),\
            (3, 'Part-Time'),\
            (4, 'Indeterminado');\
            ")
conn.commit()
print("Job Types created successfully")
# Softwares
cur.execute("DROP TABLE IF EXISTS softwares CASCADE;\
            CREATE TABLE softwares ( \
            software_id int NOT NULL,\
            software_name varchar NOT NULL,\
            PRIMARY KEY (software_id) \
            );\
            INSERT INTO softwares (software_id,software_name) \
            VALUES \
            (1, 'MS Office'),\
            (2, 'SAP'),\
            (3, 'Indeterminado');\
            ")
conn.commit()
print("Softwares created successfully")
# Specialties
cur.execute("DROP TABLE IF EXISTS specialties CASCADE;\
            CREATE TABLE specialties ( \
            specialty_id int NOT NULL,\
            specialty_name varchar NOT NULL,\
            PRIMARY KEY (specialty_id) \
            );\
            INSERT INTO specialties (specialty_id,specialty_name) \
            VALUES \
            (1, 'Enfermería'),\
            (2, 'TENS'),\
            (3, 'Odontología'),\
            (4, 'Kinesiología'),\
            (5, 'Fonoaudiología'),\
            (6, 'Nutricionista'),\
            (7, 'Tecnología Médica'),\
            (8, 'Asistente Dental'),\
            (9, 'Psicología'),\
            (10, 'Matrona'),\
            (11, 'Paramédico'),\
            (12, 'Psicopedagogía'),\
            (13, 'Indeterminado');\
            ")
conn.commit()
print("Specialties created successfully")
# Certificates
cur.execute("DROP TABLE IF EXISTS certificates CASCADE;\
            CREATE TABLE certificates ( \
            certificate_id int NOT NULL,\
            certificate_name varchar NOT NULL,\
            PRIMARY KEY (certificate_id) \
            );\
            INSERT INTO certificates (certificate_id,certificate_name) \
            VALUES \
            (1, 'ACLS (Apoyo Vital Cardiopulmonar Avanzado)'),\
            (2, 'BLS (Apoyo de Vida Básico)'),\
            (3, 'Registro SIS (Registro Nacional de Prestadores de Salud)'),\
            (4, 'Vacunas Hepatitis'),\
            (5, 'Programa de Vacunas'),\
            (6, 'Diploma Gestión de Calidad'),\
            (7, 'Curso Evaluador Sistema Nacional de Acreditación'),\
            (8, 'Diplomado en Intensivo Pediátrico'),\
            (9, 'IAAS'),\
            (10, 'Categorización Triage ESI'),\
            (11, 'PALS (Apoyo Vital Pediátrico Avanzado)'),\
            (12, 'Reanimación Avanzada'),\
            (13, 'Protección Radiológica'),\
            (14, 'Diploma del Proceso Quirúrgico'),\
            (15, 'Prevención y Control de Infecciones 20 Horas'),\
            (16, 'ERA (Enfermerdades Respiratorias del Adulto)'),\
            (17, 'IRA (Infecciones Respiratorias del Adulto)'),\
            (18, 'Manejo Avanzado de Heridas y Ostomías'),\
            (19, 'Operadora Autoclave'),\
            (20, 'RCP'),\
            (21, 'Eunacom'),\
            (22, 'Indeterminado');\
            ")
conn.commit()
print("Certificates created successfully")
# Health Services
cur.execute("DROP TABLE IF EXISTS health_services CASCADE;\
            CREATE TABLE health_services ( \
            health_service_id int NOT NULL,\
            health_service_name varchar NOT NULL,\
            PRIMARY KEY (health_service_id) \
            );\
            INSERT INTO health_services (health_service_id,health_service_name) \
            VALUES \
            (1, 'Medico Quirúrgico'),\
            (2, 'Endoscopía'),\
            (3, 'Pediatría'),\
            (4, 'Neurología'),\
            (5, 'Toma de Muestras / Laboratorio'),\
            (6, 'Ecografía'),\
            (7, 'Diálisis'),\
            (8, 'Electroencefalograma'),\
            (9, 'Ambulatoria'),\
            (10, 'Dental'),\
            (11, 'Primeros Auxilios'),\
            (12, 'Calidad'),\
            (13, 'UPC'),\
            (14, 'Estetilización'),\
            (15, 'UTM'),\
            (16, 'Oncología'),\
            (17, 'Imagenología'),\
            (18, 'Vacunación'),\
            (19, 'Dermatología'),\
            (20, 'Pabellón'),\
            (21, 'Otorrinolaringología'),\
            (22, 'Maternidad'),\
            (23, 'UCI Pediátrica'),\
            (24, 'Indeterminado');\
            ")
conn.commit()
print("Health Services created successfully")
# Regiones
cur.execute("DROP TABLE IF EXISTS regiones CASCADE;\
            CREATE TABLE regiones (\
            region_id int NOT NULL,\
            region_name varchar NOT NULL,\
            abreviatura varchar NOT NULL,\
            capital_name varchar NOT NULL,\
            PRIMARY KEY (region_id)\
            );\
            INSERT INTO regiones (region_id,region_name,abreviatura,capital_name)\
            VALUES\
            (1,'Arica y Parinacota','AP','Arica'),\
            (2,'Tarapacá','TA','Iquique'),\
            (3,'Antofagasta','AN','Antofagasta'),\
            (4,'Atacama','AT','Copiapó'),\
            (5,'Coquimbo','CO','La Serena'),\
            (6,'Valparaiso','VA','valparaíso'),\
            (7,'Metropolitana de Santiago','RM','Santiago'),\
            (8,'Libertador General Bernardo OHiggins','OH','Rancagua'),\
            (9,'Maule','MA','Talca'),\
            (10,'Ñuble','NB','Chillán'),\
            (11,'Biobío','BI','Concepción'),\
            (12,'La Araucanía','IAR','Temuco'),\
            (13,'Los Ríos','LR','Valdivia'),\
            (14,'Los Lagos','LL','Puerto Montt'),\
            (15,'Aysén del General Carlos Ibáñez del Campo','AI','Coyhaique'),\
            (16,'Magallanes y de la Antártica Chilena','MG','Punta Arenas'),\
            (17,'Indeterminado','NA','NA');\
            ")
conn.commit()
print("Regiones creadas con éxito")
# Provincias
cur.execute("DROP TABLE IF EXISTS provincias CASCADE;\
            CREATE TABLE provincias (\
            provincia_id int NOT NULL,\
            provincia_name varchar NOT NULL,\
            region_id int NOT NULL REFERENCES regiones (region_id),\
            PRIMARY KEY (provincia_id));\
            INSERT INTO provincias (provincia_id,provincia_name,region_id)\
            VALUES\
            (1,'Arica',1),\
            (2,'Parinacota',1),\
            (3,'Iquique',2),\
            (4,'El Tamarugal',2),\
            (5,'Tocopilla',3),\
            (6,'El Loa',3),\
            (7,'Antofagasta',3),\
            (8,'Chañaral',4),\
            (9,'Copiapó',4),\
            (10,'Huasco',4),\
            (11,'Elqui',5),\
            (12,'Limarí',5),\
            (13,'Choapa',5),\
            (14,'Petorca',6),\
            (15,'Los Andes',6),\
            (16,'San Felipe de Aconcagua',6),\
            (17,'Quillota',6),\
            (18,'Valparaiso',6),\
            (19,'San Antonio',6),\
            (20,'Isla de Pascua',6),\
            (21,'Marga Marga',6),\
            (22,'Chacabuco',7),\
            (23,'Santiago',7),\
            (24,'Cordillera',7),\
            (25,'Maipo',7),\
            (26,'Melipilla',7),\
            (27,'Talagante',7),\
            (28,'Cachapoal',8),\
            (29,'Colchagua',8),\
            (30,'Cardenal Caro',8),\
            (31,'Curicó',9),\
            (32,'Talca',9),\
            (33,'Linares',9),\
            (34,'Cauquenes',9),\
            (35,'Diguillín',10),\
            (36,'Itata',10),\
            (37,'Punilla',10),\
            (38,'Bio Bío',11),\
            (39,'Concepción',11),\
            (40,'Arauco',11),\
            (41,'Malleco',12),\
            (42,'Cautín',12),\
            (43,'Valdivia',13),\
            (44,'Ranco',13),\
            (45,'Osorno',14),\
            (46,'Llanquihue',14),\
            (47,'Chiloé',14),\
            (48,'Palena',14),\
            (49,'Coyhaique',15),\
            (50,'Aysén',15),\
            (51,'General Carrera',15),\
            (52,'Capitán Prat',15),\
            (53,'Última Esperanza',16),\
            (54,'Magallanes',16),\
            (55,'Tierra del Fuego',16),\
            (56,'Antártica Chilena',16),\
            (57,'Indeterminado',17);\
            ")       
conn.commit()  
print("Provincias creadas con éxito")
# Comunas
cur.execute("DROP TABLE IF EXISTS comunas CASCADE;\
            CREATE TABLE comunas ( \
            comuna_id int NOT NULL,\
            comuna_name varchar NOT NULL,\
            provincia_id int NOT NULL REFERENCES provincias (provincia_id),\
            PRIMARY KEY (comuna_id));\
            INSERT INTO comunas (comuna_id,comuna_name,provincia_id) \
            VALUES \
            (1,'Arica',1),\
            (2,'Camarones',1),\
            (3,'General Lagos',2),\
            (4,'Putre',2),\
            (5,'Alto Hospicio',3),\
            (6,'Iquique',3),\
            (7,'Camiña',4),\
            (8,'Colchane',4),\
            (9,'Huara',4),\
            (10,'Pica',4),\
            (11,'Pozo Almonte',4),\
            (12,'Tocopilla',5),\
            (13,'María Elena',5),\
            (14,'Calama',6),\
            (15,'Ollagüe',6),\
            (16,'San Pedro de Atacama',6),\
            (17,'Antofagasta',7),\
            (18,'Mejillones',7),\
            (19,'Sierra Gorda',7),\
            (20,'Taltal',7),\
            (21,'Chañaral',8),\
            (22,'Diego de Almagro',8),\
            (23,'Copiapó',9),\
            (24,'Caldera',9),\
            (25,'Tierra Amarilla',9),\
            (26,'Vallenar',10),\
            (27,'Alto del Carmen',10),\
            (28,'Freirina',10),\
            (29,'Huasco',10),\
            (30,'La Serena',11),\
            (31,'Coquimbo',11),\
            (32,'Andacollo',11),\
            (33,'La Higuera',11),\
            (34,'Paihuano',11),\
            (35,'Vicuña',11),\
            (36,'Ovalle',12),\
            (37,'Combarbalá',12),\
            (38,'Monte Patria',12),\
            (39,'Punitaqui',12), \
            (40,'Río Hurtado',12),\
            (41,'Illapel',13),\
            (42,'Canela',13),\
            (43,'Los Vilos',13),\
            (44,'Salamanca',13),\
            (45,'La Ligua',14),\
            (46,'Cabildo',14),\
            (47,'Zapallar',14),\
            (48,'Papudo',14),\
            (49,'Petorca',14),\
            (50,'Los Andes',15),\
            (51,'San Esteban',15),\
            (52,'Calle Larga',15),\
            (53,'Rinconada',15),\
            (54,'San Felipe',16),\
            (55,'Llaillay',16),\
            (56,'Putaendo',16),\
            (57,'Santa María',16),\
            (58,'Catemu',16),\
            (59,'Panquehue',16),\
            (60,'Quillota',17),\
            (61,'La Cruz',17),\
            (62,'La Calera',17),\
            (63,'Nogales',17),\
            (64,'Hijuelas',17),\
            (65,'Valparaíso',18),	\
            (66,'Viña del Mar',18),\
            (67,'Concón',18),\
            (68,'Quintero',18),\
            (69,'Puchuncaví',18),\
            (70,'Casablanca',18),\
            (71,'Juan Fernández',18),\
            (72,'San Antonio',19),\
            (73,'Cartagena',19),\
            (74,'El Tabo',19),\
            (75,'El Quisco',19),\
            (76,'Algarrobo',19),\
            (77,'Santo Domingo',19),\
            (78,'Isla de Pascua',20),\
            (79,'Quilpué',21),\
            (80,'Limache',21),\
            (81,'Olmué',21),\
            (82,'Villa Alemana',21),\
            (83,'Colina',22),\
            (84,'Lampa',22),\
            (85,'Tiltil',22),\
            (86,'Santiago',23),\
            (87,'Vitacura',23),\
            (88,'San Ramón',23),\
            (89,'San Miguel',23),\
            (90,'San Joaquín',23),\
            (91,'Renca',23),\
            (92,'Recoleta',23),\
            (93,'Quinta Normal',23),\
            (94,'Quilicura',23),\
            (95,'Pudahuel',23),\
            (96,'Providencia',23),\
            (97,'Peñalolén',23),\
            (98,'Pedro Aguirre Cerda',23),\
            (99,'Ñuñoa',23),\
            (100,'Maipú',23),\
            (101,'Macul',23),\
            (102,'Lo Prado',23),\
            (103,'Lo Espejo',23),\
            (104,'Lo Barnechea',23),\
            (105,'Las Condes',23),\
            (106,'La Reina',23),\
            (107,'La Pintana',23),\
            (108,'La Granja',23),\
            (109,'La Florida',23),\
            (110,'La Cisterna',23),\
            (111,'Independencia',23),\
            (112,'Huechuraba',23),\
            (113,'Estación Central',23),\
            (114,'El Bosque',23),\
            (115,'Conchalí',23),\
            (116,'Cerro Navia',23),\
            (117,'Cerrillos',23),\
            (118,'Puente Alto',24),\
            (119,'San José de Maipo',24),\
            (120,'Pirque',24),\
            (121,'San Bernardo',25),\
            (122,'Buin',25),\
            (123,'Paine',25),\
            (124,'Calera de Tango',25),\
            (125,'Melipilla',26),\
            (126,'Alhué',26),\
            (127,'Curacaví',26),\
            (128,'María Pinto',26),\
            (129,'San Pedro',26),\
            (130,'Isla de Maipo',27),\
            (131,'El Monte',27),\
            (132,'Padre Hurtado',27),\
            (133,'Peñaflor',27),\
            (134,'Talagante',27),\
            (135,'Codegua',28),\
            (136,'Coínco',28),\
            (137,'Coltauco',28),\
            (138,'Doñihue',28),\
            (139,'Graneros',28),\
            (140,'Las Cabras',28),\
            (141,'Machalí',28),\
            (142,'Malloa',28),\
            (143,'Mostazal',28),\
            (144,'Olivar',28),\
            (145,'Peumo',28),\
            (146,'Pichidegua',28),\
            (147,'Quinta de Tilcoco',28),\
            (148,'Rancagua',28),\
            (149,'Rengo',28),\
            (150,'Requínoa',28),\
            (151,'San Vicente de Tagua Tagua',28),\
            (152,'Chépica',29),\
            (153,'Chimbarongo',29),\
            (154,'Lolol',29),\
            (155,'Nancagua',29),\
            (156,'Palmilla',29),\
            (157,'Peralillo',29),\
            (158,'Placilla',29),\
            (159,'Pumanque',29),\
            (160,'San Fernando',29),\
            (161,'Santa Cruz',29),\
            (162,'La Estrella',30),\
            (163,'Litueche',30),\
            (164,'Marchigüe',30),\
            (165,'Navidad',30),\
            (166,'Paredones',30),\
            (167,'Pichilemu',30),\
            (168,'Curicó',31),\
            (169,'Hualañé',31),\
            (170,'Licantén',31),\
            (171,'Molina',31),\
            (172,'Rauco',31),\
            (173,'Romeral',31),\
            (174,'Sagrada Familia',31),\
            (175,'Teno',31),\
            (176,'Vichuquén',31),\
            (177,'Talca',32),\
            (178,'San Clemente',32),\
            (179,'Pelarco',32),\
            (180,'Pencahue',32),\
            (181,'Maule',32),\
            (182,'San Rafael',32),\
            (183,'Curepto',33),\
            (184,'Constitución',32),\
            (185,'Empedrado',32),\
            (186,'Río Claro',32),\
            (187,'Linares',33),\
            (188,'San Javier',33),\
            (189,'Parral',33),\
            (190,'Villa Alegre',33),\
            (191,'Longaví',33),\
            (192,'Colbún',33),\
            (193,'Retiro',33),\
            (194,'Yerbas Buenas',33),\
            (195,'Cauquenes',34),\
            (196,'Chanco',34),\
            (197,'Pelluhue',34),\
            (198,'Bulnes',35),\
            (199,'Chillán',35),\
            (200,'Chillán Viejo',35),\
            (201,'El Carmen',35),\
            (202,'Pemuco',35),\
            (203,'Pinto',35),\
            (204,'Quillón',35),\
            (205,'San Ignacio',35),\
            (206,'Yungay',35),\
            (207,'Cobquecura',36),\
            (208,'Coelemu',36),\
            (209,'Ninhue',36),\
            (210,'Portezuelo',36),\
            (211,'Quirihue',36),\
            (212,'Ránquil',36),\
            (213,'Treguaco',36),\
            (214,'San Carlos',37),\
            (215,'Coihueco',37),\
            (216,'San Nicolás',37),\
            (217,'Ñiquén',37),\
            (218,'San Fabián',37),\
            (219,'Alto Biobío',38),\
            (220,'Antuco',38),\
            (221,'Cabrero',38),\
            (222,'Laja',38),\
            (223,'Los Ángeles',38),\
            (224,'Mulchén',38),\
            (225,'Nacimiento',38),\
            (226,'Negrete',38),\
            (227,'Quilaco',38),\
            (228,'Quilleco',38),\
            (229,'San Rosendo',38),\
            (230,'Santa Bárbara',38),\
            (231,'Tucapel',38),\
            (232,'Yumbel',38),\
            (233,'Concepción',39),\
            (234,'Coronel',39),\
            (235,'Chiguayante',39),\
            (236,'Florida',39),\
            (237,'Hualpén',39),\
            (238,'Hualqui',39),\
            (239,'Lota',39),\
            (240,'Penco',39),\
            (241,'San Pedro de La Paz',39),\
            (242,'Santa Juana',39),\
            (243,'Talcahuano',39),\
            (244,'Tomé',39),\
            (245,'Arauco',40),\
            (246,'Cañete',40),\
            (247,'Contulmo',40),\
            (248,'Curanilahue',40),\
            (249,'Lebu',40),\
            (250,'Los Álamos',40),\
            (251,'Tirúa',40),\
            (252,'Angol',41),\
            (253,'Collipulli',41),\
            (254,'Curacautín',41),\
            (255,'Ercilla',41),\
            (256,'Lonquimay',41),\
            (257,'Los Sauces',41),\
            (258,'Lumaco',41),\
            (259,'Purén',41),\
            (260,'Renaico',41),\
            (261,'Traiguén',41),\
            (262,'Victoria',41),\
            (263,'Temuco',42),\
            (264,'Carahue',42),\
            (265,'Cholchol',42),\
            (266,'Cunco',42),\
            (267,'Curarrehue',42),\
            (268,'Freire',42),\
            (269,'Galvarino',42),\
            (270,'Gorbea',42),\
            (271,'Lautaro',42),\
            (272,'Loncoche',42),\
            (273,'Melipeuco',42),\
            (274,'Nueva Imperial',42),\
            (275,'Padre Las Casas',42),\
            (276,'Perquenco',42),\
            (277,'Pitrufquén',42),\
            (278,'Pucón',42),\
            (279,'Saavedra',42),\
            (280,'Teodoro Schmidt',42),\
            (281,'Toltén',42),\
            (282,'Vilcún',42),\
            (283,'Villarrica',42),\
            (284,'Valdivia',43),\
            (285,'Corral',43),\
            (286,'Lanco',43),\
            (287,'Los Lagos',43),\
            (288,'Máfil',43),\
            (289,'Mariquina',43),\
            (290,'Paillaco',43),\
            (291,'Panguipulli',43),\
            (292,'La Unión',44),\
            (293,'Futrono',44),\
            (294,'Lago Ranco',44),\
            (295,'Río Bueno',44),\
            (296,'Osorno',45),\
            (297,'Puerto Octay',45),\
            (298,'Purranque',45),\
            (299,'Puyehue',45),\
            (300,'Río Negro',45),\
            (301,'San Juan de la Costa',45),\
            (302,'San Pablo',45),\
            (303,'Calbuco',46),\
            (304,'Cochamó',46),\
            (305,'Fresia',46),\
            (306,'Frutillar',46),\
            (307,'Llanquihue',46),\
            (308,'Los Muermos',46),\
            (309,'Maullín',46),\
            (310,'Puerto Montt',46),\
            (311,'Puerto Varas',46),\
            (312,'Ancud',47),\
            (313,'Castro',47),\
            (314,'Chonchi',47),\
            (315,'Curaco de Vélez',47),\
            (316,'Dalcahue',47),\
            (317,'Puqueldón',47),\
            (318,'Queilén',47),\
            (319,'Quellón',47),\
            (320,'Quemchi',47),\
            (321,'Quinchao',47),\
            (322,'Chaitén',48),\
            (323,'Futaleufú',48),\
            (324,'Hualaihué',48),\
            (325,'Palena',48),\
            (326,'Lago Verde',49),\
            (327,'Coihaique',49),\
            (328,'Aysén',50),\
            (329,'Cisnes',50),\
            (330,'Guaitecas',50),\
            (331,'Río Ibáñez',51),\
            (332,'Chile Chico',51),\
            (333,'Cochrane',52),\
            (334,'OHiggins',52),\
            (335,'Tortel',52),\
            (336,'Natales',53),\
            (337,'Torres del Paine',53),\
            (338,'Laguna Blanca',54),\
            (339,'Punta Arenas',54),\
            (340,'Río Verde',54),\
            (341,'San Gregorio',54),\
            (342,'Porvenir',55),\
            (343,'Primavera',55),\
            (344,'Timaukel',55),\
            (345,'Cabo de Hornos',56),\
            (346,'Antártica',56),\
            (347,'Indeterminado',57);\
")
conn.commit()    
print("Comunas creadas con éxito")
#create table push_destinations
cur.execute("DROP TABLE IF EXISTS push_destinations CASCADE;\
            CREATE TABLE push_destinations (\
            push_destination_id serial NOT NULL,\
            push_destination_link varchar NOT NULL,\
            specialty_id int NOT NULL,\
            PRIMARY KEY (push_destination_id),\
            FOREIGN KEY (specialty_id) REFERENCES specialties (specialty_id));\
            INSERT INTO push_destinations (push_destination_link, specialty_id)\
            VALUES \
            ('https://chat.whatsapp.com/L6K22OaMgtrD6E9Iqm6ZBq',1),\
            ('https://chat.whatsapp.com/ByGZwqx4bXRDQwneb2GCxb',1),\
            ('https://chat.whatsapp.com/HrQU00A2WPcITz2nsMgjem',3),\
            ('https://chat.whatsapp.com/EukRBYGTZR1C9aqy5nkmPO',4),\
            ('https://chat.whatsapp.com/LrrqH5vsFmh3k2dyaBIdUr',5),\
            ('https://chat.whatsapp.com/D7XopiLrWV0B5hcvYRomPn',6),\
            ('https://chat.whatsapp.com/HdSyo8CqU1gHCOy6VTY1VJ',7),\
            ('https://chat.whatsapp.com/IxcUsoRDt6Z4oh170D74k0',8),\
            ('https://chat.whatsapp.com/L4o5PgTbTpf0tH8Nc2itci',9),\
            ('https://chat.whatsapp.com/HDoCh95yN4V2ZgsF3CE3yq',10);\
            ")
conn.commit()
print("Destinos creados con éxito")
#create push_services table
cur.execute("DROP TABLE IF EXISTS push_services CASCADE;\
            CREATE TABLE push_services (\
            push_service_id serial NOT NULL,\
            push_service_name varchar NOT NULL,\
            PRIMARY KEY (push_service_id));\
            INSERT INTO push_services (push_service_name)\
            VALUES \
            ('Firebase'),\
            ('OneSignal'),\
            ('WhatsApp'),\
            ('Twittter'),\
            ('Facebook'),\
            ('Instagram'),\
            ('LinkedIn'),\
            ('Email'),\
            ('SMS');\
            ")
conn.commit()
print("Push services creados con éxito")
#create push_statuses table
cur.execute("DROP TABLE IF EXISTS push_statuses CASCADE;\
            CREATE TABLE push_statuses (\
            push_status_id serial NOT NULL,\
            push_status_name varchar NOT NULL,\
            PRIMARY KEY (push_status_id));\
            INSERT INTO push_statuses (push_status_id, push_status_name)\
            VALUES \
            (1, 'Queued'),\
            (2, 'Sent'),\
            (3, 'Delivered'),\
            (4, 'Read'),\
            (5, 'Clicked'),\
            (6, 'Expired'),\
            (7, 'Failed');\
            ")
conn.commit()
print("Push statuses creados con éxito")
#create table for companies where company_id is the primary key
cur.execute("CREATE TABLE IF NOT EXISTS companies (\
            company_id serial NOT NULL,\
            company_name varchar NOT NULL,\
            PRIMARY KEY (company_id));\
            ")
conn.commit()
print("Companies creadas con éxito")
#create table job_requirements (job_requiremet_id int NOT NULL, health_service_id int NOT NULL, experience_type_id int NOT NULL, urgency_required boolean NOT NULL, high_responsability boolean NOT NULL, driving_requirement_id int NOT NULL, PRIMARY KEY (job_requiremet_id), FOREIGN KEY (health_service_id) REFERENCES health_services (health_service_id), FOREIGN KEY (experience_type_id) REFERENCES experience_types (experience_type_id), FOREIGN KEY (driving_requirement_id) REFERENCES driving_requirements (driving_requirement_id));
cur.execute("CREATE TABLE IF NOT EXISTS job_requirements (\
            job_requirement_id serial NOT NULL,\
            health_service_id int,\
            experience_type_id int,\
            urgency_required boolean NOT NULL,\
            high_responsability boolean NOT NULL,\
            driving_requirement_id int NOT NULL,\
            PRIMARY KEY (job_requirement_id),\
            FOREIGN KEY (health_service_id) REFERENCES health_services (health_service_id),\
            FOREIGN KEY (experience_type_id) REFERENCES experience_types (experience_type_id),\
            FOREIGN KEY (driving_requirement_id) REFERENCES driving_requirements (driving_requirement_id)\
            );\
            ")
conn.commit()
print("Job Requirements creadas con éxito")
#create table job_offers 
"""
cur.execute("DROP TABLE IF EXISTS raw_job_offers CASCADE;")
conn.commit()
"""
cur.execute("CREATE TABLE IF NOT EXISTS raw_job_offers (\
            raw_job_offer_id serial NOT NULL,\
            title varchar NOT NULL,\
            origin_link varchar NOT NULL,\
            destination_link varchar NOT NULL,\
            inclusive_offer bool NOT NULL DEFAULT FALSE,\
            location varchar,\
            contract_type varchar,\
            job_type varchar,\
            urgency_required bool NOT NULL DEFAULT FALSE,\
            high_responsability bool NOT NULL DEFAULT FALSE,\
            scanned_on timestamp NOT NULL DEFAULT NOW(),\
            web_service varchar,\
            detailed_scan bool NOT NULL DEFAULT FALSE,\
            description varchar,\
            company varchar,\
            published_date varchar,\
            close_date varchar,\
            salary varchar,\
            experience varchar,\
            driving_requirements varchar,\
            slots_available varchar,\
            pills varchar,\
            filtered_offer bool DEFAULT FALSE,\
            requisitos varchar,\
            PRIMARY KEY (raw_job_offer_id)\
            );\
            ")
conn.commit()
print("Raw Job Offers creadas con éxito")
#create table normalized_job_offers (normalized_job_offer_id int NOT NULL, title varchar NOT NULL, link varchar NOT NULL, published_date date NOT NULL, salary varchar NOT NULL, slot_available varchar NOT NULL, description varchar NOT NULL, job_requiremet_id int NOT NULL, web_service_id int NOT NULL, company_id int NOT NULL, job_type_id int NOT NULL, contract_type_id int NOT NULL, PRIMARY KEY (normalized_job_offer_id)); AND ADD FOREIGN KEYS REFERENCES job_types_id (job_type_id), contract_types_id (contract_type_id), job_requirements (job_requiremet_id), web_services (web_service_id), companies (company_id);
cur.execute("CREATE TABLE IF NOT EXISTS  normalized_job_offers (\
            normalized_job_offer_id serial NOT NULL,\
            title varchar NOT NULL,\
            link varchar NOT NULL,\
            published_date timestamp,\
            close_date timestamp,\
            inclusive_offer bool,\
            salary bigint,\
            slots_available varchar,\
            description varchar,\
            scheduled bool NOT NULL DEFAULT FALSE,\
            job_requirement_id int NOT NULL,\
            web_service_id int NOT NULL,\
            company_id int NOT NULL,\
            job_type_id int NOT NULL,\
            contract_type_id int NOT NULL,\
            shift_type_id int NOT NULL,\
            raw_job_offer_id int NOT NULL,\
            PRIMARY KEY (normalized_job_offer_id),\
            FOREIGN KEY (job_type_id) REFERENCES job_types (job_type_id),\
            FOREIGN KEY (contract_type_id) REFERENCES contract_types (contract_type_id),\
            FOREIGN KEY (job_requirement_id) REFERENCES job_requirements (job_requirement_id),\
            FOREIGN KEY (web_service_id) REFERENCES web_services (web_service_id),\
            FOREIGN KEY (company_id) REFERENCES companies (company_id),\
            FOREIGN KEY (raw_job_offer_id) REFERENCES raw_job_offers (raw_job_offer_id)\
            );\
            ")
conn.commit()
print("Normalized Job Offers creadas con éxito")
#create table pushed_job_offers
cur.execute("CREATE TABLE IF NOT EXISTS push_job_offers (\
            pushed_job_offer_id serial NOT NULL,\
            normalized_job_offer_id int NOT NULL,\
            push_service_id int NOT NULL,\
            push_status_id int NOT NULL DEFAULT 1,\
            PRIMARY KEY (pushed_job_offer_id),\
            FOREIGN KEY (normalized_job_offer_id) REFERENCES normalized_job_offers (normalized_job_offer_id),\
            FOREIGN KEY (push_service_id) REFERENCES push_services (push_service_id),\
            FOREIGN KEY (push_status_id) REFERENCES push_statuses (push_status_id));\
            ")
conn.commit()
print("Pushed job offers creadas con éxito")
#Job Locations
cur.execute("CREATE TABLE IF NOT EXISTS  job_locations (\
            job_location_id serial NOT NULL,\
            normalized_job_offer_id int NOT NULL REFERENCES normalized_job_offers (normalized_job_offer_id),\
            comuna_id int REFERENCES comunas (comuna_id),\
            region_id int REFERENCES regiones (region_id),\
            PRIMARY KEY (job_location_id)\
            );\
            ")
conn.commit()
print("Job Locations creadas con éxito")
#create table that intersects job_requirements and softwares 
cur.execute("CREATE TABLE IF NOT EXISTS job_requirements_softwares (\
            job_requirement_id serial NOT NULL,\
            software_id int NOT NULL,\
            PRIMARY KEY (job_requirement_id, software_id),\
            FOREIGN KEY (job_requirement_id) REFERENCES job_requirements (job_requirement_id),\
            FOREIGN KEY (software_id) REFERENCES softwares (software_id)\
            );\
            ")
conn.commit()
print("Job Requirements Softwares creadas con éxito")
#do the same for an intersection with certificates
cur.execute("CREATE TABLE IF NOT EXISTS job_requirements_certificates (\
            job_requirement_id serial NOT NULL,\
            certificate_id int NOT NULL,\
            PRIMARY KEY (job_requirement_id, certificate_id),\
            FOREIGN KEY (job_requirement_id) REFERENCES job_requirements (job_requirement_id),\
            FOREIGN KEY (certificate_id) REFERENCES certificates (certificate_id)\
            );\
            ")
conn.commit()
print("Job Requirements Certificates creadas con éxito")

#create table called normalized_job_offers_specialties that intersects normalized_job_offers and specialties
cur.execute("CREATE TABLE IF NOT EXISTS  normalized_job_offers_specialties (\
            normalized_job_offer_id serial NOT NULL,\
            specialty_id int NOT NULL,\
            PRIMARY KEY (normalized_job_offer_id, specialty_id),\
            FOREIGN KEY (normalized_job_offer_id) REFERENCES normalized_job_offers (normalized_job_offer_id),\
            FOREIGN KEY (specialty_id) REFERENCES specialties (specialty_id)\
            );\
            ")
conn.commit()
print("Normalized Job Offers Specialties creadas con éxito")

#create a table that logs the errors that occur during the scraping process
cur.execute("CREATE TABLE IF NOT EXISTS  scraping_errors (\
            scraping_error_id serial NOT NULL,\
            error_description varchar NOT NULL,\
            error_date timestamp NOT NULL DEFAULT NOW(),\
            PRIMARY KEY (scraping_error_id)\
            );\
            ")
conn.commit()
print("Scraping Errors creadas con éxito")

try:
    cur.close()
    conn.close()
except Exception as e:
    print("Error en el cierre de conexión")

