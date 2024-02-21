# Guide d'utilisation

Ce guide explique comment démarrer le serveur et le front-end de l'application, ainsi que la façon de personnaliser les paramètres via le fichier `paramètre.js` du serveur.

## Démarrer le Serveur

1. Assurez-vous d'avoir Node.js installé sur votre système.

2. Ouvrez votre terminal et naviguez jusqu'au répertoire contenant le code source du serveur.

3. Installez les dépendances dans le dossier associé au serveur:

``` bash
cd serveur 
npm install 
```

4. Pour démarrer le serveur :

```bash
node serveur.js 
```

## Démarrer le front, le site

1. Assurez-vous d'avoir Node.js installé sur votre système.

2. Ouvrez votre terminal et naviguez jusqu'au répertoire contenant le code source du serveur.

3. Installez les dépendances dans le dossier associé au serveur:

``` bash
cd serveur 
npm install 
```

4. Démarrer le serveur :

``` bash
node server.js
```

Les paramètres tels que psi, alpha et se trouvent dans le fichier `parametre.js` du serveur.

## Pour commencer le questionnaire : 

Il va falloir modifier le fichier `Questionnaire.js`  dans le dossier Component du front.
Ouvrez le fichier Questionnaire.js (ou créez-le s’il n’existe pas) et modifiez-le comme suit :
Pour savoir les choses qui sont possibles de faire, il faut se référer à la documentation : 
https://react-bootstrap.netlify.app/docs/forms/overview/

```js
import React from "react";
import Form from 'react-bootstrap/Form';

const Questionnaire = () => {
    return (
        <div>
            <Form>
                {/* Ajoutez vos questions ici */}
                <Form.Group controlId="question1">
                    <Form.Label>Question 1 :</Form.Label>
                    <Form.Control type="text" placeholder="Votre question ici" />
                </Form.Group>

                <Form.Group controlId="question2">
                    <Form.Label>Question 2 :</Form.Label>
                    <Form.Control type="text" placeholder="Votre question ici" />
                </Form.Group>

                {/* Ajoutez plus de questions si nécessaire */}

                <button type="submit">Envoyer</button>
            </Form>
        </div>
    );
}

export default Questionnaire;
```