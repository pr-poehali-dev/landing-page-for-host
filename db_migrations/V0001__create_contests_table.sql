CREATE TABLE contests (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100),
    duration_minutes INTEGER,
    min_participants INTEGER DEFAULT 2,
    max_participants INTEGER,
    difficulty VARCHAR(50) CHECK (difficulty IN ('easy', 'medium', 'hard')),
    equipment TEXT,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_contests_category ON contests(category);
CREATE INDEX idx_contests_difficulty ON contests(difficulty);
CREATE INDEX idx_contests_is_active ON contests(is_active);

COMMENT ON TABLE contests IS 'Конкурсы для мероприятий';
COMMENT ON COLUMN contests.title IS 'Название конкурса';
COMMENT ON COLUMN contests.description IS 'Описание и правила конкурса';
COMMENT ON COLUMN contests.category IS 'Категория (свадьба, корпоратив, день рождения и т.д.)';
COMMENT ON COLUMN contests.duration_minutes IS 'Длительность конкурса в минутах';
COMMENT ON COLUMN contests.min_participants IS 'Минимальное количество участников';
COMMENT ON COLUMN contests.max_participants IS 'Максимальное количество участников';
COMMENT ON COLUMN contests.difficulty IS 'Сложность конкурса';
COMMENT ON COLUMN contests.equipment IS 'Необходимый реквизит и оборудование';