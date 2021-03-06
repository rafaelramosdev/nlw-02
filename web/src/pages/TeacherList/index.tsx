import { useState, FormEvent} from 'react';

import api from '../../services/api';

import { Header } from '../../components/Header';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';
import { TeacherItem, Teacher } from '../../components/TeacherItem';

import './styles.scss';

export function TeacherList() {
  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  const [teachers, setTeachers] = useState([]);

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    if(!subject || !week_day || !time)
      return;

    const response = await api.get('classes', {
      params: {
        subject,
        week_day,
        time,
      }
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponíveis.">
        <form onSubmit={searchTeachers} id="search-teachers">
          <Select 
            label="Matéria" 
            name="subject" 
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Física', label: 'Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' }
            ]}
          />

          <Select 
            label="Dia da semana" 
            name="week-day" 
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />

          <Input type="time" label="Hora" name="time" value={time} onChange={(e) => setTime(e.target.value)} />

          <button type="submit">Buscar</button>
        </form>
      </Header>

      <main>
        { teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem key={teacher.id} teacher={teacher} />
          );
        }) }
      </main>
    </div>
  );
}