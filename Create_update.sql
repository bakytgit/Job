--Таблица "Исполители" 
CREATE TABLE public."Performers" (
	"ID" Serial primary key, 
	"Name" text null	
);

--Таблица "Жанры" 
CREATE TABLE public."Genres" (
	"ID" Serial primary key,
	"Name" text NULL	
);

--Таблица "Албомы"
CREATE TABLE public."Albums" (
	"ID" Serial primary key,
	"Name" varchar NULL,
	"Year" int4 null CHECK ("Year" >= 1900)	
);

--Таблица "Сборники"
CREATE TABLE public."Compilation" (
	"ID" Serial primary key,
	"Name" varchar NULL,
	"Year" int4 NULL	
);

--Таблица "Треки"
CREATE TABLE public."Tracks" (
	"ID" Serial primary key,
	"ID_album" int4 NULL,
	"Name" varchar NULL,
	"Duration" int4 null CHECK ("Duration" > 0),	
	CONSTRAINT "Tracks_fkey" FOREIGN KEY ("ID_album") REFERENCES public."Albums"("ID") ON DELETE CASCADE ON UPDATE CASCADE
);

--Таблица Жанры и Исполнители
CREATE TABLE public."GenPer" (
	"ID" Serial primary key,
	"ID_Perf" int4 NOT NULL,
	"ID_Gen" int4 NOT NULL,	
	CONSTRAINT "GenPer_fkey" FOREIGN KEY ("ID_Perf") REFERENCES public."Performers"("ID") ON DELETE CASCADE ON UPDATE CASCADE, 
	CONSTRAINT "GenPer_fkey_1" FOREIGN KEY ("ID_Gen") REFERENCES public."Genres"("ID") ON DELETE CASCADE ON UPDATE CASCADE
);

--Таблица Исполнители и Альбомы
CREATE TABLE public."PerAlbum" (
	"ID_perf" int4 NOT NULL,
	"ID_albums" int4 NOT NULL,
	CONSTRAINT "PerAlbum_pk" PRIMARY KEY ("ID_perf", "ID_albums"),
	CONSTRAINT "PerAlbum_fk" FOREIGN KEY ("ID_perf") REFERENCES public."Performers"("ID") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT "PerAlbum_fk_1" FOREIGN KEY ("ID_albums") REFERENCES public."Albums"("ID") ON DELETE CASCADE ON UPDATE CASCADE
);

--Таблица Треки и Сборники
CREATE TABLE public."TrackComp" (	
	"ID_tracks" int4 NOT NULL,
	"ID_comps" int4 NOT NULL,	
	CONSTRAINT "TrackComp_pk" PRIMARY KEY ("ID_tracks", "ID_comps"),
	CONSTRAINT "TrackComp_fk" FOREIGN KEY ("ID_tracks") REFERENCES public."Tracks"("ID") ON DELETE CASCADE ON UPDATE CASCADE,
	CONSTRAINT "TrackComp_fk_1" FOREIGN KEY ("ID_comps") REFERENCES public."Compilation"("ID") ON DELETE CASCADE ON UPDATE CASCADE
);

