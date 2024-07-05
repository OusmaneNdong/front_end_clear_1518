/* tslint:disable */
/* eslint-disable */
import { DemandeDto } from '../models/demande-dto';
import { UtilisateurDto } from '../models/utilisateur-dto';
export interface DemandeurDto {
  adresse?: string;
  completed?: boolean;
  datedenaissance?: string;
  demandeDTO?: Array<DemandeDto>;
  email?: string;
  fonction?: string;
  fullName?: string;
  id?: number;
  lieudenaissance?: string;
  nin?: string;
  nom?: string;
  prenom?: string;
  scannernin?: string;
  sexe?: string;
  statut?: string;
  telephone?: string;
  userId?: number;
  utilisateurDTO?: UtilisateurDto;
}
