import prompts from "../data/prompts.json";
import ailments from "../data/ailments.json";
import conditionEvents from "../data/conditionEvents.json";
import relations from "../data/relations.json";
import events from "../data/events.json";
import locations from "../data/locations.json";
import characters from "../data/characters.json";
import pets from "../data/pets.json";
import petProblems from "../data/petProblems.json";
import occupations from "../data/occupations.json";
import foods from "../data/foods.json";
import transportModes from "../data/transportModes.json";
import transportIssues from "../data/transportIssues.json";
import utilityIssues from "../data/utilityIssues.json";
import utilityServices from "../data/utilityServices.json";
import appliances from "../data/appliances.json";
import weathers from "../data/weathers.json";
import weatherConditions from "../data/weatherConditions.json";
import situations from "../data/situations.json";
import activities from "../data/activities.json";
import bodyParts from "../data/bodyParts.json";
import objects from "../data/objects.json";
import things from "../data/things.json";
import emotions from "../data/emotions.json";
import names from "../data/names.json";
import films from "../data/films.json";

const getRandomFromData = (source: Array<string>) => {
  return source[Math.floor(Math.random() * source.length)];
};

const matchToData = (key: string) => {
  switch (key) {
    case "ailment":
      return getRandomFromData(ailments);
    case "conditionEvent":
      return getRandomFromData(conditionEvents);
    case "relation":
      return getRandomFromData(relations);
    case "event":
      return getRandomFromData(events);
    case "location":
      return getRandomFromData(locations);
    case "character":
      return getRandomFromData(characters);
    case "pet":
      return getRandomFromData(pets);
    case "petProblem":
      return getRandomFromData(petProblems);
    case "occupation":
      return getRandomFromData(occupations);
    case "food":
      return getRandomFromData(foods);
    case "transportMode":
      return getRandomFromData(transportModes);
    case "transportIssue":
      return getRandomFromData(transportIssues);
    case "utilityIssue":
      return getRandomFromData(utilityIssues);
    case "utilityService":
      return getRandomFromData(utilityServices);
    case "appliance":
      return getRandomFromData(appliances);
    case "weather":
      return getRandomFromData(weathers);
    case "weatherCondition":
      return getRandomFromData(weatherConditions);
    case "situation":
      return getRandomFromData(situations);
    case "activity":
      return getRandomFromData(activities);
    case "bodyPart":
      return getRandomFromData(bodyParts);
    case "object":
      return getRandomFromData(objects);
    case "thing":
      return getRandomFromData(things);
    case "emotion":
      return getRandomFromData(emotions);
    case "name":
      return getRandomFromData(names);
    case "film":
      return getRandomFromData(films);
    default:
      throw new Error("missing prompt text for category: " + key);
  }
};

const populate = (prompt: string): string => {
  let excuse = prompt.replace(/(\{\{\S*\}\})/g, (group) =>
    matchToData(group.substring(2, group.length - 2)),
  );
  if (excuse.includes("{{")) {
    excuse = populate(excuse);
  }
  return excuse;
};

export const createExcuse = (promptNum?: number): string => {
  if (promptNum !== undefined) {
    if (promptNum > prompts.length) throw new Error("out of bounds");
    return populate(prompts[promptNum]);
  }

  return populate(prompts[Math.floor(Math.random() * prompts.length)]);
};
