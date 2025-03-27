function bubbleSort(numbers) {
    const TotalElementsInArray = numbers.length;
    
    for (let i = 0; i < TotalElementsInArray - 1; i++) {
        let swapped = false;
        
        console.log(`Passo ${i + 1}: ${numbers[i]}`);
        
        for (let j = 0; j < TotalElementsInArray - i - 1; j++) {
            console.log(`Comparando ${numbers[j]} e ${numbers[j + 1]}`);
            
            if (numbers[j] > numbers[j + 1]) {
                console.log(`Trocando ${numbers[j]} e ${numbers[j + 1]}`);
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
                
                console.log(`Array agora: ${numbers}`);
                swapped = true;
            }
        }
        
        if (!swapped) break;
        console.log(`Array após o passo ${i + 1}: ${numbers}`);
    }
    
    return numbers;
}

module.exports = bubbleSort;