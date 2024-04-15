from flask import Flask, render_template, json

app = Flask(__name__)

concept_mapping = {
    '1-1': 'concept1.1.html',
    '1-2': 'concept1.2.html'
}

# Load JSON data
with open('static/json/concept-about.json') as f:
    concepts_data = json.load(f)

@app.route('/')
def home2():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/learn')
def learn():
    return render_template('learn.html')

# Route for "Concept about" pages
@app.route('/concept<int:concept_id>')
def concept_about(concept_id):
    concept = None
    for c in concepts_data:
        if c["id"] == concept_id:
            concept = c
            break

    if concept:
        return render_template(f'concepts-about/concept{concept_id}.html', concept=concept)
    else:
        return "Concept not found", 404

# Route for each concepts' example pages 
# e.g. http://127.0.0.1:5000/concept1-1 takes you to /templates/concept1/concept1.1.html
@app.route('/concept<int:concept_id>-<int:example_page_id>')
def concept_example(concept_id, example_page_id):
    return render_template(f'concept{concept_id}/concept{concept_id}.{example_page_id}.html')
    
@app.route('/quiz')
def quiz():
    return render_template('quiz.html')

if __name__ == '__main__':
    app.run(debug=True)
