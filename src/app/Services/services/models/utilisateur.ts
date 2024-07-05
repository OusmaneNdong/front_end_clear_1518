/* tslint:disable */
/* eslint-disable */
import { Demande } from '../models/demande';
import { Demandeur } from '../models/demandeur';
import { GrantedAuthority } from '../models/granted-authority';
import { Profile } from '../models/profile';
export interface Utilisateur {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  credentialsNonExpired?: boolean;
  demande?: Array<Demande>;
  demandeur?: Demandeur;
  email?: string;
  enabled?: boolean;
  fullName?: string;
  id?: number;
  nin?: string;
  nom?: string;
  passPort?: string;
  password?: string;
  prenom?: string;
  profile?: Profile;
  signature?: string;
  statut?: string;
  typePieces?: string;
  username?: string;
}
