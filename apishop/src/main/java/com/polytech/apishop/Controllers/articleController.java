package com.polytech.apishop.Controllers;
import com.polytech.apishop.Services.articleService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.polytech.apishop.Entities.article;
import com.polytech.apishop.Entities.categories;
import com.polytech.apishop.Repos.articleRepository;
import com.polytech.apishop.Services.articleService;
import com.polytech.apishop.Services.categorieService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/article")
public class articleController {
    

    @Autowired
    private articleService articleServ;

    @Autowired
    private articleRepository articleResp;

    @Autowired
    private categorieService categorieServ;

    @GetMapping("/liste")
    public List<article> voirListeArticles() {
        return articleServ.voirListeArticles();
    }

    @GetMapping(path = "/liste/{name}")
    public List<article> voirListeArticlesParNom(@PathVariable(value = "name") String name) {
        return articleServ.voirListeArticlesParNom(name);
    }

    @GetMapping(path = "/description/{id}")
    public String voirDescriptionArticle(@PathVariable(value = "id") Integer id_article) {
        return articleServ.voirDescriptionArticle(id_article);
    }

    @PostMapping("/ajouter")
    public ResponseEntity<article> ajouterArticle(@RequestBody article article){
        return new ResponseEntity<>(articleResp.save(article), HttpStatus.OK);
    }

    @DeleteMapping("/supprimer/{id}")
    public void supprimerArticle(@PathVariable(value = "id") Integer id_article) {
        try {
            articleResp.deleteById(id_article);
        } catch (Exception e){}
    }

    // /article/categorie/liste
    @GetMapping("/categorie/liste")
    public List<categories> voirListeCategories() {
        return categorieServ.voirListeCategories();
    }
    // /article/categorie/liste

    @PutMapping("/modifier/{id}")
    public ResponseEntity<article> modifierArticle(@PathVariable(value = "id") Integer id_article,@RequestBody article modif){
        Optional<article> articleModifier = articleResp.findById(id_article);
        if (articleModifier.isPresent()) {
            return new ResponseEntity<>(articleResp.save(articleServ.modifierArticle(articleModifier, modif)), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
