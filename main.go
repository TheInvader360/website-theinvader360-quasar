package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

const port = 8081

var db data

type data struct {
	AppProjects  []appProject  `json:"appProjects"`
	FunProjects  []funProject  `json:"funProjects"`
	WorkProjects []workProject `json:"workProjects"`
}

type appProject struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	ImagePath   string `json:"imagePath"`
	Description string `json:"description"`
	URLPlay     string `json:"urlPlay"`
	URLAmazon   string `json:"urlAmazon"`
	URLGithub   string `json:"urlGithub"`
	URLApk      string `json:"urlApk"`
}

type funProject struct {
	ID          int    `json:"id"`
	Name        string `json:"name"`
	Description string `json:"description"`
}

type workProject struct {
	ID             int    `json:"id"`
	Name           string `json:"name"`
	CommissionedBy string `json:"commissionedBy"`
}

func main() {
	loadData()
	router := mux.NewRouter().StrictSlash(true)
	router.HandleFunc("/projects-apps", readAppProjects).Methods("GET")
	router.HandleFunc("/projects-apps/{id}", readAppProject).Methods("GET")
	router.HandleFunc("/projects-fun", readFunProjects).Methods("GET")
	router.HandleFunc("/projects-fun/{id}", readFunProject).Methods("GET")
	router.HandleFunc("/projects-work", readWorkProjects).Methods("GET")
	router.HandleFunc("/projects-work/{id}", readWorkProject).Methods("GET")
	headers := handlers.AllowedHeaders([]string{"Content-Type"})
	methods := handlers.AllowedMethods([]string{"GET"})
	origins := handlers.AllowedOrigins([]string{"*"})
	log.Printf("Running on port %d", port)
	log.Fatal(http.ListenAndServe(fmt.Sprintf(":%d", port), handlers.CORS(headers, methods, origins)(router)))
}

func loadData() {
	file, err := os.Open("public/data.json")
	if err != nil {
		log.Fatal(err.Error())
	}
	defer file.Close()
	byteValue, err := ioutil.ReadAll(file)
	if err != nil {
		log.Fatal(err.Error())
	}
	err = json.Unmarshal(byteValue, &db)
	if err != nil {
		log.Fatal(err.Error())
	}
}

func readAppProjects(w http.ResponseWriter, r *http.Request) {
	//curl -s -X GET "http://localhost:8081/projects-apps" | jq '.'
	time.Sleep(time.Second)
	err := json.NewEncoder(w).Encode(db.AppProjects)
	if err != nil {
		log.Print(err)
		return
	}
}

func readAppProject(w http.ResponseWriter, r *http.Request) {
	//curl -s -X GET "http://localhost:8081/projects-apps/1" | jq '.'
	time.Sleep(time.Second)
	id, err := strconv.Atoi(mux.Vars(r)["id"])
	if err != nil {
		log.Print(err)
		return
	}
	project := appProject{}
	for _, appProject := range db.AppProjects {
		if appProject.ID == id {
			project = appProject
			break
		}
	}
	if project == (appProject{}) {
		log.Printf("app project with id %d not found", id)
		w.WriteHeader(http.StatusNotFound)
		return
	}
	err = json.NewEncoder(w).Encode(project)
	if err != nil {
		log.Print(err)
		return
	}
}

func readFunProjects(w http.ResponseWriter, r *http.Request) {
	//curl -s -X GET "http://localhost:8081/projects-fun" | jq '.'
	time.Sleep(time.Second)
	err := json.NewEncoder(w).Encode(db.FunProjects)
	if err != nil {
		log.Print(err)
		return
	}
}

func readFunProject(w http.ResponseWriter, r *http.Request) {
	//curl -s -X GET "http://localhost:8081/projects-fun/1" | jq '.'
	time.Sleep(time.Second)
	id, err := strconv.Atoi(mux.Vars(r)["id"])
	if err != nil {
		log.Print(err)
		return
	}
	project := funProject{}
	for _, funProject := range db.FunProjects {
		if funProject.ID == id {
			project = funProject
			break
		}
	}
	if project == (funProject{}) {
		log.Printf("fun project with id %d not found", id)
		w.WriteHeader(http.StatusNotFound)
		return
	}
	err = json.NewEncoder(w).Encode(project)
	if err != nil {
		log.Print(err)
		return
	}
}

func readWorkProjects(w http.ResponseWriter, r *http.Request) {
	//curl -s -X GET "http://localhost:8081/projects-work" | jq '.'
	time.Sleep(time.Second)
	err := json.NewEncoder(w).Encode(db.WorkProjects)
	if err != nil {
		log.Print(err)
		return
	}
}

func readWorkProject(w http.ResponseWriter, r *http.Request) {
	//curl -s -X GET "http://localhost:8081/projects-work/1" | jq '.'
	time.Sleep(time.Second)
	id, err := strconv.Atoi(mux.Vars(r)["id"])
	if err != nil {
		log.Print(err)
		return
	}
	project := workProject{}
	for _, workProject := range db.WorkProjects {
		if workProject.ID == id {
			project = workProject
			break
		}
	}
	if project == (workProject{}) {
		log.Printf("work project with id %d not found", id)
		w.WriteHeader(http.StatusNotFound)
		return
	}
	err = json.NewEncoder(w).Encode(project)
	if err != nil {
		log.Print(err)
		return
	}
}
