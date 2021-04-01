CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "task" (
	"id" uuid DEFAULT uuid_generate_v4 (),
	"assigned_user" VARCHAR(255) NULL,
	"task_msg" VARCHAR(255) NULL,
	"task_date" DATE NULL,
	"task_time" VARCHAR NULL
)
;