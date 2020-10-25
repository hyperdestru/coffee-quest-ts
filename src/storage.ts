export function parsedStorage() 
{
	if (localStorage.getItem('coffeequest')) 
	{
		const hf = localStorage.getItem('coffeequest')
		const parsed = JSON.parse(hf)
		return parsed
		
	} else {
		return null
	}
}