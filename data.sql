-- Database should be prime_feedback
CREATE DATABASE "prime_feedback";

-- Switch to "prime_feedback" before making:
-- Table to store the feedback
--Joe edited datatypes to accept DECIMAL
CREATE TABLE "feedback" (
  "id" serial primary key,
  "feeling" DECIMAL(3,1) not null,
  "understanding" DECIMAL(3,1) not null,
  "support" DECIMAL(3,1) not null,
  "comments" text,
  "flagged" boolean default false,
  "date" date not null default CURRENT_DATE
); 

-- Sample feedback item
INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
VALUES (4.1, 4.1, 5.0, 'Doing Great!');
