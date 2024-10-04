
Таблица 1
CREATE TABLE public."GenPer" (
	"ID" int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	"ID_Perf" int4 NOT NULL,
	"ID_Gen" int4 NOT NULL,
	CONSTRAINT "GenPer_pkey" PRIMARY KEY ("ID"),
	CONSTRAINT "GenPer" FOREIGN KEY ("ID_Perf") REFERENCES public."Performers"("ID"),
	CONSTRAINT "GenPer_ID_Gen_fkey" FOREIGN KEY ("ID_Gen") REFERENCES public."Genres"("ID")
	
Таблица 2
	CREATE TABLE public."Genres" (
	"ID" int4 NOT NULL,
	"Name" text NULL,
	CONSTRAINT "Genres_pkey" PRIMARY KEY ("ID")
);
Таблиц 3 
CREATE TABLE public."Performers" (
	"ID" int4 NOT NULL,
	"Name" text NULL,
	CONSTRAINT "Performers_pkey" PRIMARY KEY ("ID")
);
Таблица 4

CREATE TABLE public.albums (
	id int4 NOT NULL,
	"name" varchar NULL,
	"year" int4 NULL,
	CONSTRAINT albums_pk PRIMARY KEY (id)
);
CREATE INDEX albums_id_idx ON public.albums USING btree (id);

Таблица №5 

CREATE TABLE public.compilation (
	id int4 NOT NULL,
	"name" varchar NULL,
	"Year" int4 NULL,
	CONSTRAINT compilation_pk PRIMARY KEY (id)
);

Таблица №6

CREATE TABLE public.peralbum (
	id_perf int4 NOT NULL,
	id_albums int4 NOT NULL,
	CONSTRAINT peralbum_pk PRIMARY KEY (id_perf, id_albums),
	CONSTRAINT peralbum_fk FOREIGN KEY (id_perf) REFERENCES public."Performers"("ID") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT peralbum_fk_1 FOREIGN KEY (id_albums) REFERENCES public.albums(id) ON DELETE CASCADE ON UPDATE CASCADE
);
Таблица №7
CREATE TABLE public.trackcomp (
	id int4 NOT NULL GENERATED ALWAYS AS IDENTITY,
	id_tracks int4 NOT NULL,
	id_comps int4 NOT NULL,
	CONSTRAINT trackcomp_pk PRIMARY KEY (id)
);
Таблица №8 

CREATE TABLE public.tracks (
	id int4 NOT NULL,
	id_album int4 NULL,
	"name" varchar NULL,
	duration int4 NULL,
	CONSTRAINT tracks_pk PRIMARY KEY (id),
	CONSTRAINT tracks_fk FOREIGN KEY (id_album) REFERENCES public.tracks(id)
);

