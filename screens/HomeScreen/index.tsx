import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Icon, Text, Picker } from '../../src/components'
import LogoViolet from '../../assets/logo-violet.png'
import styles from './styles';

export type TypeClassData = {
  course: string;
  subject: string;
  time: string;
}

export const courseOptions = [
	{
		label: '2°A',
		value: '2°A',
	},
	{
		label: '3°A',
		value: '3°A',
	},
	{
		label: '2°A',
		value: '2°A',
	},
]

export const subjectOptions = [
	{
		label: 'Matemática',
		value: 'Matemática',
	},
	{
		label: 'Lengua',
		value: 'Lengua',
	},
	{
		label: 'Inglés',
		value: 'Inglés',
	},
]

export default function HomeScreen() {
  const [currentClass, setCurrentClass] = useState<TypeClassData | null>(null);
  const [nextClass, setNextClass] = useState<TypeClassData | null>(null);
	const [course, setCourse] = useState<string>('')
	const [subject, setSubject] = useState<string>('')

  // Simulamos la función para obtener los horarios del profesor
  useEffect(() => {
    const fetchClasses = async () => {
      // Aquí iría la llamada a la API
      const current = {
        course: '2°A',
        subject: 'Matemática',
        time: '09:00 AM - 10:00 AM',
      };

      const next = {
        course: '3°A',
        subject: 'Matemática',
        time: '10:00 AM - 11:00 AM',
      };

      setCurrentClass(current);
      setNextClass(next);
    };

    fetchClasses();
  }, []);

  return (
    <>
			<View style={styles.header}>
				<Image
					source={LogoViolet}
				/>
				<View style={styles.icons}>
					<Icon 
						family="MaterialCommunityIcons" 
						name="bell" 
						size={26} 
						color='#FFF'
					/>
					<Icon 
						family="FontAwesome" name="user-circle" 
						size={26} 
						color='#FFF'
					/>
				</View>
			</View>
			<View style={styles.container}>
				<ScrollView>
					<Text style={styles.title}>Registro de asistencias</Text>
					{/* Clase actual */}
					<View style={styles.classContainer}>
						<Text style={styles.currentClassTitle}>Clase actual</Text>
						{currentClass ? (
							<>
								<View style={styles.courseContainer}>
									<Text style={styles.courseText}>Curso</Text>
									<Text style={styles.currentCourseText}>{currentClass.course}</Text>
								</View>
								<View style={styles.courseContainer}>
									<Text style={styles.courseText}>Asignatura</Text>
									<Text style={styles.currentCourseText}>{currentClass.subject}</Text>
								</View>
							</>
						): null}
					</View>

					{/* Siguiente clase */}
					<View style={styles.classContainer}>
						<Text style={styles.nextClassTitle}>Siguiente clase</Text>
						{nextClass && (
							<>
								<View style={styles.courseContainer}>
									<Text style={styles.courseText}>Curso</Text>
									<Text style={styles.currentCourseText}>{nextClass.course}</Text>
								</View>
								<View style={styles.courseContainer}>
									<Text style={styles.courseText}>Asignatura</Text>
									<Text style={styles.currentCourseText}>{nextClass.subject}</Text>
								</View>
							</>
						)}
					</View>
					<Text style={styles.title}>Modificar asistencia</Text>
					<View style={styles.pickerContainer}>
						<Picker
							value={course}
							options={courseOptions}
							onChange={setCourse}
						/>
					</View>
					<View style={styles.pickerContainer}>
						<Picker
							value={subject}
							options={subjectOptions}
							onChange={setSubject}
						/>
					</View>
					<TouchableOpacity style={styles.button}>
						<Text style={styles.buttonText}>Ver asistencia</Text>
					</TouchableOpacity>
				</ScrollView>
			</View>
			<View style={styles.footer}>
        <TouchableOpacity style={styles.scanButton}>
					<Icon 		  
						family="Ionicons" 
						name="scan-sharp" 
						size={40} 
						color="#EB5B26" 
					/>
        </TouchableOpacity>
      </View>
		</>
  );
}
