import React from 'react';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title='Estes são os proffys disponíveis.'>
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Máteria" 
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Portugues', label: 'Portugues' },
                            { value: 'Química', label: 'Química' },
                        ]}
                    />
                    <Select 
                        name="week_day" 
                        label="Dia da semana" 
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feria' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feria' },
                            { value: '5', label: 'Sexta0-feira' },
                            { value: '6', label: 'Sábada' },
                        ]}
                    />
                    <Input type='time' name="time" label="Hora" />
                </form>
            </PageHeader>
        
            <main>
                <TeacherItem />             
                <TeacherItem />             
                <TeacherItem />             
                <TeacherItem />             
                <TeacherItem />             
            </main>
        </div>
    );
}

export default TeacherList;

