export function whatAbout(city, addinterests) {
    let prompt = `Describe ${city} for a prospective student. Do not include any website links, URLs, or external references. Keep it concise and to the point. Don't talk like an AI. Don't include phraes such as "Okay, here’s a description of ${city}" geared toward a prospective student, focusing solely on work, education, and restaurants" and whatnot. Start directly with the bullet points. This will be used in a website that helps students choose a city to study in. Also, state the city and then add a colon:`;
  if (addinterests) {
    prompt += ` Only talk about the following topics: ${addinterests}. Don't talk about any other topics or include any filler content. For each interest, bullet point them as a list.`; 
  }
  else{
    prompt += `Give a general overview of the city.`;
  }
  return prompt;
}

export function whatAboutAll(cities, addinterests) {
    if (Array.isArray(cities)) {
        let prompts = [];
        prompts.push(`USE NEXT INSTRUCTIONS AS A TEMPLATE. APPLY TEMPLATE FOR EACH CITY AND THEIR INTERESTS:`);
        cities.forEach(city => {
            prompts.push(whatAbout(city, addinterests));
        });
        return prompts;
    } else {
        return [whatAbout(cities, addinterests)];
    }
}