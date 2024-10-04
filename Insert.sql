INSERT INTO public."Genres"
("ID", "Name")
VALUES(1, 'Rap');

INSERT INTO public."Performers"
("ID", "Name")
VALUES(0, 'Ivanov');

INSERT INTO public.albums
(id, per_id, "name", "year")
VALUES(2, 0, 'Mr. Morale', 1981);

INSERT INTO public.compilation
(id, "name", "Year")
VALUES(0, 'clubs', 1980);

INSERT INTO public.tracks
(id, id_album, "name", duration)
VALUES(9, 0, 'SNAP', 10);
