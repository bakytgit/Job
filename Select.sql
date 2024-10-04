
Задание №2 

SELECT name
FROM tracks
WHERE duration >= 210;

SELECT albums
FROM albums
WHERE year BETWEEN 2018 AND 2020;

SELECT duration
FROM tracks
ORDER BY duration DESC
LIMIT 1;

SELECT tr."name"  
FROM public."tracks" as tr
where tr."name" like '%мой%' or tr."name" like '%my%';

SELECT per."Name"  
FROM public."Performers" as per
where per."Name" not like '% %'

Задание №3

Написать SELECT-запросы, которые выведут информацию согласно инструкциям ниже.
Внимание: результаты запросов не должны быть пустыми, при необходимости добавьте данные в таблицы.
1.	Количество исполнителей в каждом жанре.

SELECT g."Name" AS genres , COUNT(DISTINCT p."ID") AS performers_count
FROM public."Genres" g
JOIN public."GenPer" gp  ON g."ID" = gp."ID_Gen" 
join public."Performers" p on gp."ID_Perf" = p."ID" 
GROUP BY g."Name" 

2.	Количество треков, вошедших в альбомы 2019–2020 годов.

SELECT a."name" as album_name, a."year", COUNT(DISTINCT t.id) AS tracks_count
FROM public.albums a
JOIN public.tracks t ON a.id = t.id_album 
where a."year" between 2019 and 2020
GROUP BY a."name", a."year"
3.	Средняя продолжительность треков по каждому альбому.
SELECT a."name", AVG(t.duration) AS avg_tr_duration
FROM tracks t
JOIN albums a ON t.id_album = a.id 
GROUP by a."name"
4.	Все исполнители, которые не выпустили альбомы в 2020 году.
SELECT p."Name"
FROM "Performers" p
JOIN peralbum pa ON p."ID" = pa.id_perf 
JOIN albums a ON a.id = pa.id_albums 
WHERE a."year" != 2020
GROUP BY p."Name"
5.	Названия сборников, в которых присутствует конкретный исполнитель (выберите его сами).
SELECT c."name" 
FROM compilation c
JOIN trackcomp ct ON c.id = ct.id_comps 
JOIN tracks t ON ct.id_tracks = t.id 
JOIN albums a ON t.id_album  = a.id
JOIN peralbum pa ON a.id = pa.id_albums 
JOIN "Performers" p ON pa.id_perf = p."ID" 
WHERE p."Name" = 'Celindion'





