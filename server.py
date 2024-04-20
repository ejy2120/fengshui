from flask import Flask, render_template, json

app = Flask(__name__)


# Load JSON data
with open('static/json/concept-about.json') as f:
    concepts_data = json.load(f)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/learn')
def learn():
    return render_template('learn.html')

@app.route('/feng-shui-achieved')
def fengshui():
    return render_template('feng-shui-achieved.html')

@app.route('/congrats')
def congrats():
    return render_template('congrats.html')

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
    
@app.route('/quiz<int:quiz_id>')
def quiz(quiz_id):
    return render_template(f'/quizzes/quiz{quiz_id}.html')

if __name__ == '__main__':
    app.run(debug=True)
