/* tslint:disable */
/* eslint-disable */
import { Demande } from '../models/demande';
import { Utilisateur } from '../models/utilisateur';
export interface Demandeur {
  adresse?: string;
  completed?: boolean;
  datedenaissance?: string;
  demande?: Array<Demande>;
  fonction?: string;
  id?: number;
  lieudenaissance?: string;
  nin?: string;
  scannernin?: string;
  sexe?: string;
  statut?: string;
  telephone?: string;
  utilisateur?: Utilisateur;
}
