import React, { useState, useEffect } from "react";

// Variables used in this example to display exercise data from props drilling
function StretchModal({
	goToTop,
	setIsStretchModalOpen,
	activeButton,
	setActiveButton,
	exerciseOne,
	exerciseTwo,
	exerciseThree,
	exerciseFour,
	exerciseFive,
	exerciseSix,
	filterValue,
}) {
	// State value for goals
	const [goals, setGoals] = useState();

	// State value for determined reps for exercises 1 - 6
	const [repsOne, setRepsOne] = useState(8);
	const [repsTwo, setRepsTwo] = useState(10);
	const [repsThree, setRepsThree] = useState(9);
	const [repsFour, setRepsFour] = useState(10);
	const [repsFive, setRepsFive] = useState(8);
	const [repsSix, setRepsSix] = useState(9);

	// State value for determined tempos and rest periods
	const [tempo, setTempo] = useState("1-2-1");
	const [tempoTwo, setTempoTwo] = useState("1-2-1");
	const [rest, setRest] = useState("30s");
	const [restTwo, setRestTwo] = useState("60s");

	const handleReturnToGenerateClick = () => {
		setActiveButton(0);
		setIsStretchModalOpen(false);
		goToTop();
	};

	useEffect(() => {
		if (activeButton === "1") {
			setGoals("Chest, Shoulders, Triceps");
		}
		if (activeButton === "2") {
			setGoals("Back, Biceps, Shoulders");
		}
		if (activeButton === "3") {
			setGoals("Quads, Hamstrings, Glutes, Calves");
		}
	}, []);

	// Working example with dyanmic exercise data pulled from API
	return (
		<section className='absolute h-[200vh] bg-[#f1f1f1] top-0 bottom-0 left-0 right-0 z-30 flex flex-col'>
			<div className='p-2 mx-auto max-w-prose grid gap-2 items-center uppercase rounded-lg md:grid-cols-2 lg:grid-cols-3 lg:max-w-[105ch]'>
				{goals && (
					<h1 className=' text-sm text-center bg-slate-800 text-white uppercase rounded-lg md:text-2xl py-3 md:col-span-2 lg:col-span-3'>
						{goals} Stretches
					</h1>
				)}
				{filterValue && (
					<h1 className=' text-sm text-center bg-slate-800 text-white uppercase rounded-lg md:text-2xl py-3 md:col-span-2 lg:col-span-3'>
						{filterValue} Stretches
					</h1>
				)}
				<div className='w-full flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 p-5 rounded-lg'>
					<h1 className=' h-12 text-sm lg:text-base'>1. {exerciseOne.name}</h1>
					<img src={exerciseOne.gifUrl} alt={exerciseOne.name} loading='lazy' />
					<div className='flex justify-between w-full h-1/2 py-2 px-8'>
						<div>
							<p>reps</p>
							<p>{repsOne}</p>
						</div>
						<div>
							<p>tempo</p>
							<p>{tempo}</p>
						</div>
						<div>
							<p>rest</p>
							<p>{rest}</p>
						</div>
					</div>
					<div className='flex items-center w-full h-full px-3'>
						<p className='pr-2'>sets:</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</div>
				</div>
				<div className='w-full flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 p-5 rounded-lg'>
					<h1 className=' h-12 text-sm lg:text-base'>2. {exerciseTwo.name}</h1>
					<img src={exerciseTwo.gifUrl} alt={exerciseTwo.name} loading='lazy' />
					<div className='flex justify-between w-full h-1/2 py-2 px-8'>
						<div>
							<p>reps</p>
							<p>{repsTwo}</p>
						</div>
						<div>
							<p>tempo</p>
							<p>{tempoTwo}</p>
						</div>
						<div>
							<p>rest</p>
							<p>{rest}</p>
						</div>
					</div>
					<div className='flex items-center w-full h-full px-3'>
						<p className='pr-2'>sets:</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</div>
				</div>
				<div className='w-full flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 p-5 rounded-lg'>
					<h1 className=' h-12 text-sm lg:text-base'>3. {exerciseThree.name}</h1>
					<img src={exerciseThree.gifUrl} alt={exerciseThree.name} loading='lazy' />
					<div className='flex justify-between w-full h-1/2 py-2 px-8'>
						<div>
							<p>reps</p>
							<p>{repsThree}</p>
						</div>
						<div>
							<p>tempo</p>
							<p>{tempo}</p>
						</div>
						<div>
							<p>rest</p>
							<p>{restTwo}</p>
						</div>
					</div>
					<div className='flex items-center w-full h-full px-3'>
						<p className='pr-2'>sets:</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</div>
				</div>
				<div className='w-full flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 p-5 rounded-lg'>
					<h1 className=' h-12 text-sm lg:text-base'>4. {exerciseFour.name}</h1>
					<img src={exerciseFour.gifUrl} alt={exerciseFour.name} loading='lazy' />
					<div className='flex justify-between w-full h-1/2 py-2 px-8'>
						<div>
							<p>reps</p>
							<p>{repsFour}</p>
						</div>
						<div>
							<p>tempo</p>
							<p>{tempoTwo}</p>
						</div>
						<div>
							<p>rest</p>
							<p>{rest}</p>
						</div>
					</div>
					<div className='flex items-center w-full h-full px-3'>
						<p className='pr-2'>sets:</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</div>
				</div>
				<div className='w-full flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 p-5 rounded-lg'>
					<h1 className=' h-12 text-sm lg:text-base'>5. {exerciseFive.name}</h1>
					<img src={exerciseFive.gifUrl} alt={exerciseFive.name} loading='lazy' />
					<div className='flex justify-between w-full h-1/2 py-2 px-8'>
						<div>
							<p>reps</p>
							<p>{repsFive}</p>
						</div>
						<div>
							<p>tempo</p>
							<p>{tempo}</p>
						</div>
						<div>
							<p>rest</p>
							<p>{rest}</p>
						</div>
					</div>
					<div className='flex items-center w-full h-full px-3'>
						<p className='pr-2'>sets:</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</div>
				</div>
				<div className='w-full flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 p-5 rounded-lg'>
					<h1 className=' h-12 text-sm lg:text-base'>6. {exerciseSix.name}</h1>
					<img src={exerciseSix.gifUrl} alt={exerciseSix.name} loading='lazy' />
					<div className='flex justify-between w-full h-1/2 py-2 px-8'>
						<div>
							<p>reps</p>
							<p>{repsSix}</p>
						</div>
						<div>
							<p>tempo</p>
							<p>{tempoTwo}</p>
						</div>
						<div>
							<p>rest</p>
							<p>{restTwo}</p>
						</div>
					</div>
					<div className='flex items-center w-full h-full px-3'>
						<p className='pr-2'>sets:</p>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
					</div>
				</div>
			</div>
			<button
				className='py-5 px-12 mt-4 border-2 text-xl border-purple-500 bg-white text-purple-500 mx-auto rounded-lg transition uppercase hover:scale-105 hover:bg-purple-600 hover:text-white'
				onClick={handleReturnToGenerateClick}
			>
				return to generate workout
			</button>
		</section>
	);
}

// 	// Example not using variables to save API call amount during development
// 	return (
// 		<section className='absolute h-[130%] top-0 bottom-0 left-0 right-0 bg-[#f1f1f1]z-30'>
// 			<div className='border-2 h-full mx-auto max-w-prose flex flex-col items-center bg-white space-y-3 uppercase  rounded-lg'>
// 				<h1 className=' text-sm text-slate-900 uppercase font-bold md:text-2xl py-3'>
// 					{goals} {filterValue} Workout
// 				</h1>
// 				<div className='w-full h-36 flex flex-col items-center text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>1. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>{repsOne}</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>{tempo}</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>{rest}</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets:</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>2. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>{repsTwo}</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>{tempoTwo}</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>{rest}</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets:</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>3. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>{repsThree}</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>{tempo}</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>{restTwo}</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets:</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>4. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>{repsFour}</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>{tempoTwo}</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>{rest}</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets:</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>5. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>{repsFive}</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>{tempo}</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>{rest}</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets:</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 				<div className='w-full h-36 flex flex-col items-center bg-white text-slate-900 shadow-lg border border-slate-500/50 mb-3 rounded-lg'>
// 					<h1 className='pt-2'>6. Exercise Name Here</h1>
// 					<div className='flex justify-between w-full h-1/2 py-2 px-8 md:px-20'>
// 						<reps>
// 							<p>reps</p>
// 							<p>{repsSix}</p>
// 						</reps>
// 						<tempo>
// 							<p>tempo</p>
// 							<p>{tempoTwo}</p>
// 						</tempo>
// 						<rest>
// 							<p>rest</p>
// 							<p>{restTwo}</p>
// 						</rest>
// 					</div>
// 					<sets className='flex items-center w-full h-full px-3 md:px-10'>
// 						<p className='pr-2'>sets:</p>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 						<span className='h-2 w-[25%] bg-slate-500/50 mr-0.5'></span>
// 					</sets>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

export default StretchModal;
