CREATE DATABASE trabalho_final;
\c trabalho_final
-- criando tabela

CREATE TABLE "itens" (
  "id" int PRIMARY KEY,
  "preco_untario" float8,
  "quantidade" float,
  "id_pedido" int,
  "codigo_produto" int,
  "id_tabela_preco" int
);


CREATE TABLE "nome_tabela_de_preco" (
  "id" int PRIMARY KEY,
  "nome" varchar,
  "data" TIMESTAMP WITH TIME ZONE
);

CREATE TABLE "item_tabela_de_preco" (
  "codigo" int PRIMARY KEY,
  "preco" float,
  "codigo_produto" int,
  "id_nome" int
);
CREATE TABLE "produto" (
  "codigo" int PRIMARY KEY,
  "nome" varchar,
  "foto" varchar,
  "valor_unitario" float,
  "aliquota_icms" int,
  "aliquota_ipi" int,
  "aliquota_icms_ST" int,
  "ncm_sh" varchar,
  "cst" int,
  "cfop" int
);

CREATE TABLE "pedido" (
  "id" int PRIMARY KEY,
  "valor_total" float,
  "valor_desconto" float,
  "valor_de_frete" float,
  "observacao_interna" text,
  "volumes" int,
  "especie_volume" varchar,
  "frete_por_conta" varchar,
  "id_transporte" int,
  "id_nfe" int
);


CREATE TABLE "cliente" (
  "CNPJ" varchar PRIMARY KEY,
  "nome" varchar,
  "IE" varchar,
  "razao_social" varchar,
  "telefone" varchar,
  "email" varchar,
  "CEP" varchar,
  "logradouro" varchar,
  "numero" varchar,
  "cidade" varchar,
  "UF" varchar,
  "observacao" text,
  "situacao" bool
);

CREATE TABLE "orcamento" (
  "id" int PRIMARY KEY,
  "data" TIMESTAMP WITH TIME ZONE,
  "cnpj_cliente" varchar,
  "id_pedido" int
);

CREATE TABLE "trasportadora" (
  "CNPJ" varchar PRIMARY KEY,
  "nome" varchar,
  "nome_filial" varchar,
  "IE" varchar,
  "razao_social" varchar,
  "telefone" varchar,
  "email" varchar,
  "CEP" varchar,
  "logradouro" varchar,
  "numero" varchar,
  "cidade" varchar,
  "UF" varchar,
  "observacao" text
);

CREATE TABLE "trasporte" (
  "id" int PRIMARY KEY,
  "cte" varchar,
  "valor_de_frete" float,
  "cnpj_trasportadora" varchar
);


CREATE TABLE "nfe" (
  "id" int PRIMARY KEY,
  "numero" int,
  "valor" float,
  "valor_icms" float,
  "valor_ipi" float,
  "valor_pis" float,
  "valor_confins" float,
  "valor_icms_st" float,
  "pdf" varchar,
  "xml" varchar,
  "observacao" text,
  "cancelada" bool
);

CREATE TABLE "duplicata" (
  "id" int PRIMARY KEY,
  "data_emissao" date,
  "data_entrada" date,
  "valor" float,
  "forma_de_pagamento" varchar,
  "obsevacao" text,
  "documento" varchar,
  "cliente" varchar,
  "pedido_id" int
);

ALTER TABLE "itens" ADD FOREIGN KEY ("id_pedido") REFERENCES "pedido" ("id");
ALTER TABLE "itens" ADD FOREIGN KEY ("codigo_produto") REFERENCES "produto" ("codigo");
ALTER TABLE "itens" ADD FOREIGN KEY ("id_tabela_preco") REFERENCES "nome_tabela_de_preco" ("id");
ALTER TABLE "item_tabela_de_preco" ADD FOREIGN KEY ("codigo_produto") REFERENCES "produto" ("codigo");
ALTER TABLE "item_tabela_de_preco" ADD FOREIGN KEY ("id_nome") REFERENCES "nome_tabela_de_preco" ("id");
ALTER TABLE "pedido" ADD FOREIGN KEY ("id_transporte") REFERENCES "trasporte" ("id");
ALTER TABLE "pedido" ADD FOREIGN KEY ("id_nfe") REFERENCES "nfe" ("id");
ALTER TABLE "orcamento" ADD FOREIGN KEY ("cnpj_cliente") REFERENCES "cliente" ("CNPJ");
ALTER TABLE "orcamento" ADD FOREIGN KEY ("id_pedido") REFERENCES "pedido" ("id");
ALTER TABLE "trasporte" ADD FOREIGN KEY ("cnpj_trasportadora") REFERENCES "trasportadora" ("CNPJ");
ALTER TABLE "duplicata" ADD FOREIGN KEY ("cliente") REFERENCES "cliente" ("CNPJ");
ALTER TABLE "duplicata" ADD FOREIGN KEY ("pedido_id") REFERENCES "pedido" ("id");


-- inserindo valores

INSERT INTO produto (
  	"codigo","nome","foto","valor_unitario","aliquota_icms","aliquota_ipi","aliquota_icms_ST","ncm_sh","cst","cfop"
 )VALUES(1,    'produto1',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(2,    'produto2',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(3,    'produto3',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(4,    'produto4',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(5,    'produto5',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(6,    'produto6',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(7,    'produto7',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(8,    'produto8',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(9,    'produto9',null,  1.99, 0,0,0,'5088989/1111',32323,23232),
 	(10,   'produto10',null, 1.99, 0,0,0,'5084554/1111',32323,23232);
 	

INSERT INTO cliente (
  	"CNPJ","nome","IE","razao_social","telefone","email","CEP","logradouro","numero","cidade","UF","observacao","situacao"
)VALUES ('35.367.305/0001-10','EVENTOS E PRODUCOES',null,'EVENTOS E PRODUCOES','499999999','EVENTOSEPRODUCOES@gmail.com','89800-997','Rua aaa','13434','Chapecó','SC',null,NULL),
	('35.367.305/0001-11','pastel do ze',null,'pastel do ze','49999945','pasteldoze@gmail.com','89800-997','Rua awd','13433','Chapecó','SC',null,null),
	('35.367.409/0001-02','caldo de cana',null,'caldo de cana','4999945','caldodecana@gmail.com','89800-997','Rua ccad','1354','Chapecó','SC',null,null),
	('35.232.305/0001-18','borracharia',null,'borracharia','49934445','borracharia@gmail.com','89800-997','Rua wwwww','13343','Chapecó','SC',null,null),
	('35.409.305/0001-09','restaurante',null,'restaurante','49343435','restaurante@gmail.com','89800-997','Rua nnn','13343','Chapecó','SC',null,null),
	('35.389.454/0001-23','boteco',null,'boteco','49348385','boteco@gmail.com','89800-997','Rua rrrr','17877','Chapecó','SC',null,null),
	('35.367.305/0001-90','bar',null,'bar','49934765','bar@gmail.com','89800-997','Rua hh','13456','Chapecó','SC',null,null),
	('23.989.888/0001-22','bar do paulo',null,'bar do paulo','43848235','bardopaulo@gmail.com','89800-997','Rua ddd','1877','Chapecó','SC',null,null),
	('45.355.305/0001-14','bar do sapo',null,'bar do sapo','49238245','bardosapo@gmail.com','89800-997','Rua cc','16543','Chapecó','SC',null,null);
	

INSERT INTO trasportadora (
 	 "CNPJ","nome",     "nome_filial",  "IE","razao_social",	"telefone","email","CEP","logradouro","numero", "cidade","UF","observacao"
)VALUES('04.353.469/0029-66','Bauer Cargas','Bauer Cargas Matriz',null,'B. Transportes Ltda','499999999','bauer@gmail.com','89834-989','Rua X','189','Chapecó','SC',null);

INSERT INTO trasporte (
  	"id","cte","valor_de_frete","cnpj_trasportadora"
)VALUES (1,'3438768',63.89,'04.353.469/0029-66'),
	(2,'3423643',6.22,'04.353.469/0029-66'),
	(3,'343343222',13.22,'04.353.469/0029-66'),
	(4,'34434333',56.78,'04.353.469/0029-66'),
	(5,null,11.34,'04.353.469/0029-66');

INSERT INTO nfe (
  	"id","numero","valor","valor_icms","valor_ipi","valor_pis","valor_confins", "valor_icms_st", "pdf",   "xml", "observacao", "cancelada"
)VALUES ( 1, 1,     10,           0,         0,            0,                 0,                 0,     'NF1.pdf','NF1.xml','optante SN',null),
	( 2,    2,    7,         0,            0,         0,            0,                 0,     'NF2.pdf','NF2.xml','optante SN',null),
	( 3,    3,    12,        0,            0,         0,            0,                 0,     'NF3.pdf','NF3.xml','optante SN',null),
	( 4,    7,    155,       0,            0,         0,            0,                 0,     'NF7.pdf','NF7.xml','optante SN',null);

INSERT INTO pedido (
  	"id","valor_total", "valor_desconto",  "valor_de_frete" ,"observacao_interna" ,"volumes",  "especie_volume","frete_por_conta","id_transporte","id_nfe"
)VALUES (1,10,0,0,'',NULL,NULL,'SEM FRETE',NULL,1),
	(2,155,10,5,'negociar data entrega com cliente',5,'CAIXA','REMETENTE',1,4),
	(3,5.30,0,0,NULL,1,'CAIXA','DESTINATARIO',2,NULL),
	(4,5,0,0,NULL,NULL,NULL,'SEM FRETE',NULL,NULL),
	(5,15.2,0,0,NULL,NULL,NULL,'SEM FRETE',NULL,NULL),
	(6,17,0,10,NULL,1,'CAIXA','DESTINATARIO',3,NULL),
	(7,20,0,0,NULL,NULL,NULL,'SEM FRETE',NULL,null),
	(8,7,0,0,NULL,NULL,NULL,'SEM FRETE',NULL,2),
	(9,10,0,0,NULL,NULL,NULL,'SEM FRETE',NULL,null),
	(10,12,0,0,NULL,1,'CAIXA','DESTINATARIO',4,3);


INSERT INTO nome_tabela_de_preco (
  	"id","nome","data"
)VALUES (1,'Tabela para pagamento à vista',now()),
	(2,'Tabela para restaurantes',now()),
	(3,'Tabela para B2B',now());

INSERT INTO item_tabela_de_preco (
  	"codigo", "preco", "codigo_produto", "id_nome"
)VALUES (1,5.00,1,1),
	(2,5.00,3,1),
	(3,5.00,2,1),
	(4,3.50,7,2),
	(5,3.50,3,2),
	(7,3.50,6,2),
	(8,3.50,10,2),
	(9,6.00,6,3),
	(10,6.25,9,3);

INSERT INTO itens (
  	"id", "preco_untario", "quantidade", "id_pedido", "codigo_produto", "id_tabela_preco"
) VALUES( 1 ,   5.00 , 		    2,		1,		4,		NULL),
	( 2 ,   5.00 , 		    20,		2,		1,		NULL),
	( 3 ,   4.00 , 		    10,		2,		2,		NULL),
	( 4 ,   5.00 , 		    2,		2,		6,		NULL),
	( 5 ,   5.30 , 		    1,		3,		4,		NULL),
	( 6 ,   2.50 , 		    2,		4,		10,		NULL),
	( 7 ,   5.00 , 		    1,		5,		7,		NULL),
	( 8 ,   5.10 , 		    2,		5,		2,		NULL),
	( 9 ,   7.00 , 		    1,		6,		1,		NULL),
	( 10,   5.00 , 		    2,		7,		3,		NULL),
	( 11,   5.00 ,	 	    2,		7,		8,		NULL),
	( 12,   null , 		    2,		8,		7,		2),
	( 13,   null , 		    2,		9,		3,		1),
	( 14,   null , 		    2,		10,		9,		3);

INSERT INTO orcamento (
  	"id","data","cnpj_cliente","id_pedido"
)VALUES (1,now(),'35.367.305/0001-10',1),        
	(2,now(),'35.367.305/0001-11',2),
	(3,now(),'35.367.409/0001-02',3),
	(4,now(),'35.232.305/0001-18',4),
	(5,now(),'35.409.305/0001-09',5),
	(6,now(),'35.389.454/0001-23',6),
	(7,now(),'35.367.305/0001-90',7),
	(8,now(),'35.367.305/0001-90',null),
	(9,now(),'23.989.888/0001-22',8),
	(10,now(),'45.355.305/0001-14',9),
	(11,now(),'35.367.409/0001-02',10);
	
	
INSERT INTO duplicata (
  	"id", "data_emissao", "data_entrada", "valor", "forma_de_pagamento", "obsevacao", "documento", "cliente", "pedido_id"
)VALUES ( 1  ,    now(),            now()+ interval '30 days',    55,       'boleto',  	     '(1)30/90',  'boleto1.pdf', '35.367.305/0001-11' , 2),
	( 2  ,    now(),                  now()+ interval '90 days',    100,      'boleto',   	     '(1)30/90',  'boleto2.pdf', '35.367.305/0001-11' , 2);

