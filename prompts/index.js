function whatAbout(city, addinterests) {
  let prompt=`What can you tell me about ${city}?, I want to know about oportunities and nice places    .`;
  if (addinterests) {
    prompt += ` I'm interested especially about these topics: ${addinterests} in ${city}.`;
  }
  return prompt;
}