--
-- PostgreSQL database dump
--

-- Dumped from database version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)
-- Dumped by pg_dump version 14.15 (Ubuntu 14.15-0ubuntu0.22.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: pets; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pets (
    id integer NOT NULL,
    name character varying(255),
    category character varying(50) NOT NULL,
    subcategory character varying(50) NOT NULL,
    price money,
    description text,
    vaccinated boolean,
    image_url text
);


ALTER TABLE public.pets OWNER TO postgres;

--
-- Name: pets_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.pets ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.pets_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: pets; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pets (id, name, category, subcategory, price, description, vaccinated, image_url) FROM stdin;
1	Bella	Dog	Pug	$1,500.00	Bella is an adorable pug who is always ready to play! She is 14 months old and is allergic to flowers. Bella also disdains cats with a passion.	t	/pets/bella.png
2	Max	Dog	Labrador Retriever	$1,250.00	Max is a friendly and outgoing Labrador who loves to play fetch and go on long walks. He is great with kids and enjoys being part of a family. He also loves eating shoes.	t	/pets/max.png
3	Freedo	Dog	German Shepherd	$3,000.00	Freedo is a loyal and intelligent dog who excels in training. She is protective of her loved ones and requires regular mental and physical exercise constantly.	t	/pets/freedo.png
4	Mocha	Dog	Mini Husky	$9,999.00	Mocha is a 33 month old small but ferocious husky with seemingly unlimited energy. She gets very excited when meeting new people to the point where she will aggresively say hello by lunging onto unsuspecting company. She is a high maintenance dog as she constantly looks for attention and chews up any new toys within minutes.	t	/pets/mocha.png
5	Rocky	Dog	Golden Retriever	$1,500.00	Rocky (named after the fictitious boxer) is a gentle and affectionate Golden Retriever. He thrives on attention and enjoys playing with toys and cuddling on the couch with his owner who could potentially be YOU!	t	/pets/rocky.png
6	Milo	Dog	Maltese	$1,234.00	Milo is ecstatic whenever his beloved owner comes home after a long school year. He enjoys watching his owner play Valorant as well as going out for walks.	t	/pets/milo.png
7	Vito	Cat	American Shorthair	$1,100.00	Vito is a shy girl. She does not get close to anyone but her owner. Once she trusts you she will never leave your side by always going up to you and snuggling whenever you are free.	t	/pets/vito.png
8	Luna	Cat	Siamese	$750.00	Luna is a vocal and affectionate Siamese cat who loves attention and enjoys sitting in sunny spots around the house. She is also classically conditioned to the sound of cowbells and will run towards you in searching for food.	t	/pets/luna.png
9	Oliver	Cat	Maine Coon	$1,200.00	Oliver is a large and gentle Maine Coon who enjoys being brushed and playing with feather toys. He also chases a laser pointer like his life depends on it. You read that right, the laser pointer, not the beam itself.	t	/pets/oliver.png
10	Juniper	Cat	Tabby	$8.12	We have no clue where Juniper came from. One day they came knocking on our door and we looked around for an owner, but nobody was there so we happily took them in. They are also super suspicious of everything so they might be a government spy.	f	/pets/juniper.png
12	Buddy	Bird	Conure	$500.00	Buddy the conure will stop at nothing for the attention he deserves and craves. He loves interacting with new people but gets upset whenever no one shows him any love <3.	t	/pets/buddy.png
13	Jackie	Bird	Cockatiel	$125.00	Jackie is the younger brother of Sunny. He loves to indulge in various snacks and playing with his sister. I lied about that last bit, they fight like it's a WW2 dogfight.	t	/pets/jackie.png
14	Sunny	Bird	Cockatiel	$124.99	Sunny is the older sister of Jackie. She is very friendly and curious cockatiel to anyone who isn't her brother. She sings melodic tunes and loves playing with her owner.	t	/pets/sunny.png
11	Maddy	Cat	Bengal	$1,500.00	Maddy is an energetic and curious Bengal who loves climbing and exploring new places. He thrives on interactive playtime with lots of cuddles and kisses.	t	/pets/maddy.png
\.


--
-- Name: pets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pets_id_seq', 14, true);


--
-- Name: pets pets_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pets
    ADD CONSTRAINT pets_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

