// Gene lookup database — English edition.
// The same eight loci, in the same order, as the Chinese edition (src/data/genes.ts),
// aligned with the evidence matrix of the genetics site.
// Field convention for this edition: `name` holds the English gene name shown as the
// entry title, `en` holds the gene symbol. `code` and `evidence` (grade letter) are
// identical to the Chinese edition; every PMID / DOI / journal / year is kept verbatim.
import type { GeneLookup } from './genes';

export const geneDatabaseEn: GeneLookup[] = [
  {
    code: 'LDHA',
    name: 'Lactate Dehydrogenase A',
    en: 'LDHA',
    category: 'Energy metabolism',
    function:
      'Encodes the A subunit of lactate dehydrogenase and takes part in anaerobic glycolysis, maintaining energy supply under high-intensity exercise.',
    associations:
      'A racing-pigeon-specific study reported a statistical association between its polymorphism and racing survivability (association is not causation, and it does not equal speed).',
    evidence: 'B',
    marker: 'SNP (single nucleotide polymorphism)',
    references: 'Ramadan et al. (2018), PLOS ONE | PMID: 29775483 | DOI: 10.1371/journal.pone.0195121',
    related: ['MSTN', 'LRP8', 'GSR'],
  },
  {
    code: 'DRD4',
    name: 'Dopamine Receptor D4',
    en: 'DRD4',
    category: 'Nervous system',
    function:
      'Encodes the dopamine D4 receptor and takes part in the regulation of motivation, cognition and behaviour.',
    associations:
      'A racing-pigeon-specific study reported a statistical association between its polymorphism and racing performance (candidate gene association, not causation).',
    evidence: 'B',
    marker: 'SNP (single nucleotide polymorphism)',
    references: 'Proskura et al. (2015), Animal Genetics | PMID: 26202371 | DOI: 10.1111/age.12328',
    related: ['CASK', 'CRY1'],
  },
  {
    code: 'CRY1',
    name: 'Cryptochrome 1',
    en: 'CRY1',
    category: 'Circadian rhythm',
    function:
      'A blue-light photoreceptor protein involved in the regulation of the circadian rhythm (the biological clock). Note: research on magnetoreception molecule candidates focuses on CRY4, which is not CRY1.',
    associations:
      'A racing-pigeon-specific study reported a statistical association between its polymorphism and racing performance; on that basis CRY1 cannot be claimed to be a "magnetoreception gene".',
    evidence: 'B',
    marker: 'SNP (single nucleotide polymorphism)',
    references: 'Dybus et al. (2021), Animals | PMID: 34573598 | DOI: 10.3390/ani11092632',
    related: ['DRD4', 'CASK'],
  },
  {
    code: 'MSTN',
    name: 'Myostatin',
    en: 'MSTN',
    category: 'Muscle development',
    function:
      'A negative regulator of skeletal muscle growth that inhibits muscle cell proliferation and differentiation; loss-of-function variants can cause muscle hypertrophy in mammals.',
    associations:
      'A study in pigeons reported MSTN polymorphism in domestic pigeons (polymorphism identification, without any analysis of association with racing performance); evidence of a racing association in racing pigeons is limited.',
    evidence: 'D',
    marker: 'SNP (single nucleotide polymorphism)',
    references:
      'Dybus et al. (2013), Vet Med | DOI: 10.17221/6654-VETMED; Rodgers & Garikipati 2008, PMID: 18591260',
    related: ['LDHA', 'LRP8'],
  },
  {
    code: 'LRP8',
    name: 'Lipoprotein Receptor-Related Protein 8',
    en: 'LRP8',
    category: 'Energy metabolism',
    function:
      'Takes part in lipid metabolism and cell signal transduction and is involved in fatty acid utilisation; it is a candidate gene in research on racing pigeon performance.',
    associations:
      'A racing-pigeon-specific study reported the structural effect of its polymorphism on protein function and the relationship of that polymorphism with racing performance (candidate gene association).',
    evidence: 'B',
    marker: 'SNP (single nucleotide polymorphism)',
    references: 'Kulig et al. (2025), Int J Biol Macromol | PMID: 40246119 | DOI: 10.1016/j.ijbiomac.2025.143181',
    related: ['LDHA', 'MSTN', 'GSR'],
  },
  {
    code: 'GSR',
    name: 'Glutathione Reductase',
    en: 'GSR',
    category: 'Antioxidant defence',
    function:
      'A key enzyme of the antioxidant system: it reduces oxidised glutathione, scavenges reactive oxygen species, and is a candidate gene in research on racing pigeon performance.',
    associations:
      'A racing-pigeon-specific study reported the structural effect of its polymorphism on protein function and the relationship of that polymorphism with racing performance (candidate gene association).',
    evidence: 'B',
    marker: 'SNP (single nucleotide polymorphism)',
    references: 'Kulig et al. (2025), Int J Biol Macromol | PMID: 40246119 | DOI: 10.1016/j.ijbiomac.2025.143181',
    related: ['LDHA', 'LRP8'],
  },
  {
    code: 'CASK',
    name: 'Calcium/Calmodulin-Dependent Serine Protein Kinase',
    en: 'CASK',
    category: 'Nervous system',
    function: 'Takes part in synapse formation, neural signal transduction and synaptic plasticity.',
    associations:
      'A study in pigeons reported CASK polymorphism in pigeons, with performance association as secondary content; this is preliminary evidence and should be interpreted with caution.',
    evidence: 'C',
    marker: 'SNP (single nucleotide polymorphism)',
    references: 'Dybus et al. (2023), Animals | PMID: 37443867 | DOI: 10.3390/ani13132070',
    related: ['DRD4', 'CRY1'],
  },
  {
    code: 'F-KER',
    name: 'Feather Keratin Gene',
    en: 'F-KER',
    category: 'Feather structure',
    function:
      'Encodes feather keratin and affects feather strength, elasticity and form; its relationship with flight performance is an indirect inference.',
    associations:
      'A study in pigeons reported F-KER polymorphism in domestic pigeons (polymorphism identification, without any analysis of association with racing performance); evidence of a racing association in racing pigeons is limited.',
    evidence: 'D',
    marker: 'Gene family polymorphism',
    references: 'Dybus & Haase (2011), Br Poult Sci | PMID: 21491240 | DOI: 10.1080/00071668.2010.549666',
    related: ['MSTN', 'LRP8'],
  },
];
