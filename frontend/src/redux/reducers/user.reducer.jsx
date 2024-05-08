import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../store";
// utilisant createSlice avec Redux Toolkit, il devient plus simple de définir des reducers, des actions et des types d'actions, ce qui réduit la quantité de code boilerplate 
//nécessaire pour gérer l'état dans une application Redux. En outre, l'utilisation de l'état initial depuis le store garantit la cohérence des données tout au long de l'application, 
//en s'assurant que toutes les portions de l'état commencent avec les mêmes valeurs par défaut.