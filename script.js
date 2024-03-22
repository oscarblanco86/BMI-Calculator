const form = document.getElementById('bmiForm');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                const height = parseFloat(document.getElementById('height').value);
                const weight = parseFloat(document.getElementById('weight').value);
                const gender = document.getElementById('gender').value;
                const bmi = calculateBMI(height, weight);
                displayResult(bmi, gender);
            });

            function calculateBMI(height, weight) {
                return weight / ((height / 100) * (height / 100));
            }

            function displayResult(bmi, gender) {
                let resultText = '';
                if (gender === 'male') {
                    if (bmi < 20.7) {
                        resultText = 'Underweight';
                    } else if (bmi >= 20.7 && bmi < 26.4) {
                        resultText = 'Normal weight';
                    } else if (bmi >= 26.4 && bmi < 27.8) {
                        resultText = 'Slightly overweight';
                    } else if (bmi >= 27.8 && bmi < 31.1) {
                        resultText = 'Overweight';
                    } else {
                        resultText = 'Obese';
                    }
                } else if (gender === 'female') {
                    if (bmi < 19.1) {
                        resultText = 'Underweight';
                    } else if (bmi >= 19.1 && bmi < 25.8) {
                        resultText = 'Normal weight';
                    } else if (bmi >= 25.8 && bmi < 27.3) {
                        resultText = 'Slightly overweight';
                    } else if (bmi >= 27.3 && bmi < 32.3) {
                        resultText = 'Overweight';
                    } else {
                        resultText = 'Obese';
                    }
                }
                document.getElementById('result').innerText = `Your BMI is ${bmi.toFixed(2)}. You are ${resultText}.`;
            }