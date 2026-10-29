# lecentre.net

Home of lecentre.net website — Lecentre.net Inc., architecture, DevOps & développement web.

Site statique monopage (HTML/CSS/JS vanilla, aucune dépendance de build) :
reconstruction moderne du site historique Bootstrap 3 de 2014.

## Structure

```
index.html        # page unique (FR)
css/style.css     # styles (custom properties, responsive, animations)
js/main.js        # menu mobile + apparition au scroll (progressive enhancement)
favicon.svg       # icône
```

## Prévisualisation en local

```sh
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Contenu conservé de l'original

- Signature : « Nous inventons l'Internet de votre entreprise »
- Services : automatisation (Ansible, Chef, Puppet, Salt Stack, Fabric), iOS & Android,
  données massives (Hadoop, Mesos, Docker, AWS EC2, GCE), accompagnement client
- Pile technique : bases de données (PostgreSQL, MySQL, Oracle, MongoDB, Redis, Cassandra),
  Big Data (Hadoop, Yarn, Mesos, Kafka, Flume), hébergement (Nginx, Apache, JVM, Node.js)
- Contact : contact@lecentre.net — +1 581 307-8232

## Déploiement

Fichiers statiques : à déposer tel quel sur n'importe quel hébergement
(Nginx, Apache, GitHub Pages, Netlify…).
