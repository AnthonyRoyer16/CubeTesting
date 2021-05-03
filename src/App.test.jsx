import { render, screen } from '@testing-library/react';
import App from './App';
import { testingReturn } from "./App";

//Classique
test('renders learn react link', () => {
  //Render l'app
  render(<App />);
  //Met en constante un élément du dom (ici un élément ayant le text lean react)
  const linkElement = screen.getByText(/learn react/i);
  //Test si l'élément existe
  expect(linkElement).toBeInTheDocument();
});

test('test image', () => {
  //Met dans une constante le rendue de l'app (le jsx) et l'utilise pour lire ces éléments
  const { container } =  render(<App />);
  //Test si l'élément recherhcer pas le nom de sa classe a un attribut src et check sa valeur
  expect(container.getElementsByClassName("App-logo")[0]).toHaveAttribute('src', 'logo.svg')
});

//Deuxième type de test qui peut etre wrapper dans un test describe
it('test testingReturn', () => {
  //Ne pas oublier d'exporter la fonction au préalable
  const { container } =  render(<App />);
  //Test la fonction testingReturn
  expect(testingReturn()).toBe("Ceci est un test")
});
