CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(100),
    phone VARCHAR(50),
    email VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE shifts (
    id SERIAL PRIMARY KEY,
    employee_id INTEGER NOT NULL,
    shift_date DATE NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    shift_type VARCHAR(50) CHECK (shift_type IN ('morning', 'day', 'evening', 'night', 'custom')),
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_employees_is_active ON employees(is_active);
CREATE INDEX idx_shifts_employee_id ON shifts(employee_id);
CREATE INDEX idx_shifts_date ON shifts(shift_date);

COMMENT ON TABLE employees IS 'Сотрудники';
COMMENT ON TABLE shifts IS 'Рабочие смены сотрудников';
COMMENT ON COLUMN shifts.shift_type IS 'Тип смены: утренняя, дневная, вечерняя, ночная или кастомная';